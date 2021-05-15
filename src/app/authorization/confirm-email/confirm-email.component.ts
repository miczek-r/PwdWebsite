import { AuthService } from 'src/app/_services/_authService/auth.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../_services/_userService/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['../authorization/authorization.component.scss']
})
export class ConfirmEmailComponent implements OnInit {

  success = false;
  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.authService.ConfirmEmail(this.route.snapshot.params.token).subscribe(
      data => {
        this.success = true;
      },
      err => {
      }
    );
  }
}
