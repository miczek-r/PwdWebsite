import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['../minicards-styles.scss']
})
export class SaldoComponent {
  saldo = 0;
  private _user: User[];



  @Input() set user(value: User[]) {
    this._user = value;
    if (this._user) {
      this._user.forEach(element => {
        this.saldo += element.saldo;
      });
    }
  }

  // Alan: Use input property getter
  get user(): User[] {
    return this._user;
  }



}
