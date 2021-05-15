import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/_services/_userService/user.service';

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.scss']
})
export class EditHomeComponent implements OnInit {
  form: any = {};
  user: User;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditHomeComponent>,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.user = this.data.user;
  }

  onSubmit(): void{
    this.userService.UpdateUser(this.user).subscribe(
      data => {
        this.dialogRef.close('reload');
      },
      err => {
        this.snackBar.open(err, 'Close', { duration: 2000, });
      }
    );
  }

}
