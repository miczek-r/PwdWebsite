import { UserService } from './../../_services/_userService/user.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-expense-limit',
  templateUrl: './expense-limit.component.html',
  styleUrls: ['./expense-limit.component.scss']
})
export class ExpenseLimitComponent implements OnInit {
  form: any = {};
  user: User;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ExpenseLimitComponent>,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.user = this.data.user;
    this.user.expenseLimit = this.form.expenseLimit;
    this.userService.UpdateUser(this.user).subscribe(
      data => {
        this.dialogRef.close();
      },
      err => {
        this.snackBar.open(err, 'Close', { duration: 2000, });
      }
    );
  }

}
