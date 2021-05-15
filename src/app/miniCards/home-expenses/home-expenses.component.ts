import { User } from './../../models/user/user';
import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Expense } from 'src/app/models/expense/expense';
import { ExpenseService } from 'src/app/_services/_expenseService/expense.service';

@Component({
  selector: 'app-home-expenses',
  templateUrl: './home-expenses.component.html',
  styleUrls: ['../minicards-styles.scss']
})
export class HomeExpensesComponent implements OnInit {
  @Input() expenses: Expense[];
  @Input() user: User[];
  expenseSum = 0;
  userExpense: number;
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [[]
  ];
  public doughnutChartColors: Array<any> = [{ backgroundColor: ['#01dd93', '#4ce7b3', '#99f1d3'], borderColor: 'transparent' }];
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    console.log(this.expenses);
    const now = new Date();
    now.setMonth(now.getMonth() - 1);
    const afterdate = new Date();
    this.expenses = this.expenses.filter(a => new Date(a.expenseDate) > now && new Date(a.expenseDate) <= afterdate);
    console.log(this.expenses);


    this.user.forEach(user => {
      this.userExpense = 0;
      this.doughnutChartLabels.push((user.firstName == null ? '' : user.firstName) + ' ' + (user.lastName == null ? '' : user.lastName));
      this.expenses.forEach(element => {
        if (element.typeOfExpenseId !== 1 && element.ownerId === user.userId) {
          this.userExpense += element.amount;
        }
      });
      this.doughnutChartData[0].push(this.userExpense);
    });


  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
