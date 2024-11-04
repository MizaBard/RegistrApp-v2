import { Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import QRious from 'qrious';
import { Subscription } from 'rxjs';
//import { AuthService } from 'src/app/servicio/auth.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/firebase/auth.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss']
})
export class DocentePage implements OnInit, OnDestroy {
  private authService = inject(AuthService); // Obtener el servicio de autenticación
  usuario: string= ""; // Campo para almacenar el nombre del usuario
  //@ts-ignore
  subscriptionAuthService: Subscription; // Subscripción para el observable del estado de autenticación

  asignaturas = [
    { nombre: 'Asignatura ', id: '1' },
    { nombre: 'Asignatura ', id: '2' },
    { nombre: 'Asignatura ', id: '3' },
    { nombre: 'Asignatura ', id: '4' },
    { nombre: 'Asignatura ', id: '5' },
  ];
  private router = inject(Router)

  qrData: string = ''; // Almacena los datos del QR
  showQRCode: boolean = false; // Controla la visibilidad del código QR

  @ViewChild('qrCanvas') qrCanvas!: ElementRef<HTMLCanvasElement>; // Referencia al canvas

  generarQR(asignaturaId: string) { // Generar la QR
    const fechaActual = new Date();
    // Formatear la fecha con guiones
    const año = fechaActual.getFullYear();
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Los meses son de 0 a 11, por eso sumamos 1
    const día = String(fechaActual.getDate()).padStart(2, '0');
    // Formatear la hora con :
    const horas = String(fechaActual.getHours()).padStart(2, '0');
    const minutos = String(fechaActual.getMinutes()).padStart(2, '0');
    const segundos = String(fechaActual.getSeconds()).padStart(2, '0');

    // Concatenar la fecha y hora con el formato deseado
    const fechaHora = `${año}-${mes}-${día},${horas}:${minutos}:${segundos}`;
    this.qrData = `http://localhost:8100/generador/${asignaturaId}/${this.usuario}/${fechaHora}`;
    this.router.navigate(['/generador'],{queryParams: {data:this.qrData}});
  }
  ngOnInit() {

  }
  ngOnDestroy() {
    this.subscriptionAuthService?.unsubscribe(); // Desuscribirse del observable del estado de autenticación
  }

}

