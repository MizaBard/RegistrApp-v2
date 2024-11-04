import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/firebase/auth.service'; //importamos para verificar si un usuario y su contraseña son validos
import { catchError } from 'rxjs/operators'; //manejo de errores
import { of } from 'rxjs'; // Importamos 'of' para manejar errores

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string = '';
  clave: string = '';
  loginFailed: boolean = false; //para mostrar un mensaje de error en la vista

  private authService = inject(AuthService); //inyecta el servicio de autenticacion para validar las credenciales
  private router = inject(Router); //navegar entre paginas

  constructor() {}

  ngOnInit(): void {}



}
