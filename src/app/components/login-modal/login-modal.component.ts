import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  recognizeUserState: string | null = null;

  constructor(public authService: AuthService) {
    this.authService.recognizeUserState().subscribe(data => {
      this.recognizeUserState = data;
    });
  }

  ngOnInit(): void {
  }

}
