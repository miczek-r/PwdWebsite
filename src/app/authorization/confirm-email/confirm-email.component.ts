import { AuthService } from 'src/app/_services/_authService/auth.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../_services/_userService/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {

  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.authService.ConfirmEmail(this.route.snapshot.params.token).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err.error);
      }
    );
  }
}
