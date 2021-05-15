import { HomeService } from 'src/app/_services/_homeService/home.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/_services/_userService/user.service';
import { Home } from 'src/app/models/home/home';

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.scss']
})
export class EditHomeComponent implements OnInit {
  form: any = {};
  home: Home;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditHomeComponent>,
    private homeService: HomeService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.homeService.GetHomeById(this.data.homeId).subscribe(result => {
      this.home = result;
    });
  }

  onSubmit(): void{
    this.homeService.UpdateHome(this.home).subscribe(
      data => {
        this.dialogRef.close('reload');
      },
      err => {
        this.snackBar.open(err, 'Close', { duration: 2000, });
      }
    );
  }

}
