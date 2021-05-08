import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Expense } from 'src/app/models/expense/expense';
import { ExpenseType } from 'src/app/models/expenseType/expense-type';
import { User } from 'src/app/models/user/user';
import { AuthService } from 'src/app/_services/_authService/auth.service';
import { ExpenseService } from 'src/app/_services/_expenseService/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'expenseType', 'date', 'amount'];
  dataSource: MatTableDataSource<Expense>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  expenses: Expense[];
  expenseTypes: ExpenseType[];
  user: User;
  constructor(private authService: AuthService, private expenseService: ExpenseService) {
    this.user = this.authService.getUser();

    this.expenseService.GetUserExpenses(this.user.userId).subscribe((data) => {
      this.expenses = data;
      this.dataSource = new MatTableDataSource(this.expenses);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.expenseService.GetAllExpenseTypes().subscribe((data) => {
      this.expenseTypes = data;
    });

  }

  ngAfterViewInit(): void {


  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getType(id: number): string {
    if (this.expenseTypes.length > 0) {

      return this.expenseTypes.find(a => a.typeOfExpenseId === id).name;
    }
    return null;
  }
}
