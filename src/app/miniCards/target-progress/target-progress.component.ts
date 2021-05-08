import { Expense } from './../../models/expense/expense';
import { User } from 'src/app/models/user/user';
import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-target-progress',
  templateUrl: './target-progress.component.html',
  styleUrls: ['../minicards-styles.scss']
})
export class TargetProgressComponent implements OnInit {
  color: ThemePalette = 'primary';
  @Input() limit: number;
  @Input() expenses: Expense[];
  progress: number;
  constructor() { }

  ngOnInit(): void {
    let sum = 0;
    const now = new Date();
    now.setMonth(now.getMonth() - 1);
    const afterdate = new Date();
    this.expenses = this.expenses.filter(
      a => new Date(a.expenseDate) > now
        && new Date(a.expenseDate) <= afterdate
        && a.typeOfExpenseId !== 1
    );

    this.expenses.forEach(element => {
      sum += element.amount;
    });
    this.progress = sum / this.limit * 100;

  }


}
