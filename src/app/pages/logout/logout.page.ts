import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/servicio/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutComponent  implements OnInit {

  private authService = inject(AuthService);

  constructor() { }

  ngOnInit(): void {
    this.authService.logout();
  }

}
