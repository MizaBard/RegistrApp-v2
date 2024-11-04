import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/firebase/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage  implements OnInit {

  private authService = inject(AuthService);

  constructor() { }

  ngOnInit(): void {

  }

}
