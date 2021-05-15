import { User } from './../../models/user/user';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user: User;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.user = data.user;
  }


  ngOnInit(): void {
  }

  onSubmit(): void {

  }
}
