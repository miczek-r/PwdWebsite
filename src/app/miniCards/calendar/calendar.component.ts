import { Component, Input, OnInit } from '@angular/core';
import { _MatTabBodyBase } from '@angular/material/tabs';
import { Expense } from 'src/app/models/expense/expense';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['../minicards-styles.scss']
})
export class CalendarComponent implements OnInit {
  @Input() expenses: Expense[]
  constructor() { }
  calendar: calendar[] = [];
  ngOnInit(): void {
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    this.expenses = this.expenses.filter(exp => new Date(exp.expenseDate) >= today);
    this.expenses = this.expenses.sort((a, b) => +new Date(a.expenseDate) - +new Date(b.expenseDate)).slice(0, 3);
    this.expenses.forEach(element => {
      this.calendar.push({ day: new Date(element.expenseDate), month: new Date(element.expenseDate).toLocaleString("pl-PL", { month: 'short'}), amount: element.amount, typeOfExpenseId: element.typeOfExpenseId })
    });

  }



}
interface calendar {
  day: Date;
  month: string;
  amount: number;
  typeOfExpenseId:number;
}