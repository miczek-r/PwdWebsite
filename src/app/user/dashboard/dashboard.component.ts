import { SetSaldoComponent } from './../set-saldo/set-saldo.component';
import { UserInfoComponent } from './../user-info/user-info.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Expense } from 'src/app/models/expense/expense';
import { User } from 'src/app/models/user/user';
import { AuthService } from 'src/app/_services/_authService/auth.service';
import { ExpenseService } from 'src/app/_services/_expenseService/expense.service';
import { AddExpenseComponent } from '../add-expense/add-expense.component';
import { AddIncomeComponent } from '../add-income/add-income.component';
import { ExpenseLimitComponent } from '../expense-limit/expense-limit.component';
import { Home } from 'src/app/models/home/home';
import { EditUserComponent } from '../edit-user/edit-user.component';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {



  userId: number;
  user: User[] = [];
  expenses: Expense[];
  home: Home;
  constructor(private authService: AuthService, private expenseService: ExpenseService, public dialog: MatDialog) { }

  dialogs =
    {
      addExpense: AddExpenseComponent,
      addIncome: AddIncomeComponent,
      expenseLimit: ExpenseLimitComponent,
      userInfo: UserInfoComponent,
      editUser: EditUserComponent,
      saldo: SetSaldoComponent
    };



  ngOnInit(): void {

    this.getData();
  }

  getData(): void {
    this.authService.update();
    this.user.push(this.authService.getUser());
    this.expenseService.GetUserExpenses(this.user[0].userId).subscribe((data) => {
      this.expenses = data;
    });
    console.log(this.user);
  }

  logout(): void {
    this.authService.logout();
    window.location.reload();
  }

  openDialog(dialog: string): void {



    const dialogRef = this.dialog.open(
      this.dialogs[dialog]
      , {
        width: '500px',
        data: { user: this.user[0] }
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'reload') {
        window.location.reload();
      }
    });
  }


}


