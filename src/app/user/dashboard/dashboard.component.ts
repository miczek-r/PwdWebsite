import { UserService } from './../../_services/_userService/user.service';
import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Expense } from 'src/app/models/expense/expense';
import { User } from 'src/app/models/user/user';
import { AuthService } from 'src/app/_services/_authService/auth.service';
import { ExpenseService } from 'src/app/_services/_expenseService/expense.service';
import { AddExpenseComponent } from '../add-expense/add-expense.component';
import { AddIncomeComponent } from '../add-income/add-income.component';
import { ExpenseLimitComponent } from '../expense-limit/expense-limit.component';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userId: number;
  user: User;
  expenses: Expense[];
  constructor(private authService: AuthService, private expenseService: ExpenseService, public dialog: MatDialog) { }

  dialogs =
    {
      addExpense: AddExpenseComponent,
      addIncome: AddIncomeComponent,
      expenseLimit: ExpenseLimitComponent
    };



  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.authService.update();
    this.user = this.authService.getUser();
    console.log(this.user);
    this.expenseService.GetUserExpenses(this.user.userId).subscribe((data) => {
      this.expenses = data;
    });

  }

  logout(): void {
    this.authService.logout();
    window.location.reload();
  }

  openDialog(dialog: string): void {



    const dialogRef = this.dialog.open(
      this.dialogs[dialog]
      , {
        width: '300px',
        data: { user: this.user }
      });

    dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
    });
  }


}


