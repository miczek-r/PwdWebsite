import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { HomeUserInfoComponent } from 'src/app/home/home-user-info/home-user-info.component';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  @Input() user: User[];
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openUserDialog(id: number): void {

    const dialogRef = this.dialog.open(
      HomeUserInfoComponent
      , {
        width: '600px',
        data: { user: this.user.find(x => x.userId === id) }
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'reload') {
        window.location.reload();
      }
    });
  }

}
