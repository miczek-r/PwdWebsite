import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  @Input() user: User[];
  constructor() { }

  ngOnInit(): void {
  }

}
