import { ExpenseService } from 'src/app/_services/_expenseService/expense.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user/user';
import { Expense } from 'src/app/models/expense/expense';

@Component({
  selector: 'app-home-income',
  templateUrl: './home-income.component.html',
  styleUrls: ['./home-income.component.scss']
})
export class HomeIncomeComponent {
  displayedColumns: string[] = ['name', 'email', 'saldo'];
  users: User[];
  expenses: Expense[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.users = data.users;
    this.expenses = data.expenses;
  }

  countIncoms(userId: number): number {
      let sum = 0;
      this.expenses.filter(x => x.ownerId === userId && x.typeOfExpenseId === 1).forEach(element => {
        sum += element.amount;
    });
      return sum;
  }
}
