import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/_services/_authService/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../minicards-styles.scss']
})
export class ProfileComponent implements OnInit {
  @Input() user:User;
  constructor() { }

  ngOnInit(): void {
  }

}
