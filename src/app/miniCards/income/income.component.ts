import { Component, Input, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense/expense';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['../minicards-styles.scss']
})
export class IncomeComponent implements OnInit {
  @Input() expenses: Expense[];
  income:number=0;
  constructor() { }

  ngOnInit(): void {
    let date = new Date;
    date.setMonth(date.getMonth()-1);
    let afterdate = new Date();
    this.expenses=this.expenses.filter(a => new Date(a.expenseDate)>date&&new Date(a.expenseDate)<=afterdate&&a.typeOfExpenseId==1);
    this.expenses.forEach(element => {
      this.income+=element.amount;
    });
    
  }
}
