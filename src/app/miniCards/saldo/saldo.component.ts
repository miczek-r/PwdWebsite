import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['../minicards-styles.scss']
})
export class SaldoComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit(): void {

  }

}
