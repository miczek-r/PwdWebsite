import { AuthService } from 'src/app/_services/_authService/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../_services/_userService/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remind-password',
  templateUrl: './remind-password.component.html',
  styleUrls: ['../authorization/authorization.component.scss']
})
export class RemindPasswordComponent implements OnInit {
  form: any = {};
  shakeIt = false;
  constructor(private authService: AuthService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  remind(): void {
    this.authService.GetPasswordRestorationToken(this.form.email).subscribe(
      data => {
        this.snackBar.open('Wysłano prośbę zmiany hasła. Sprawdź pocztę', 'Close', { duration: 2000, });
      },
      err => {
        this.shakeDialog();
        this.snackBar.open('Błąd przypominania hasła', 'Close', { duration: 2000, });
      }
    );
  }

  shakeDialog(): void {
    this.shakeIt = true;
    setTimeout((arg) => {
      this.shakeIt = false;
    },
      600);
  }

}
