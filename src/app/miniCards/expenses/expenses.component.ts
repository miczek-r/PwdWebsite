import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Expense } from 'src/app/models/expense/expense';
import { ExpenseService } from 'src/app/_services/_expenseService/expense.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['../minicards-styles.scss']
})
export class ExpensesComponent implements OnInit {
  @Input() expenses: Expense[];
  expenseSum = 0;
  expenseTypeSum: number;
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
    this.expenseService.GetAllExpenseTypes().subscribe((data) => {
      data.forEach(element => {
        if (element.typeOfExpenseId !== 1) {
          this.doughnutChartLabels.push(element.name);
          this.expenseTypeSum = 0;
          this.expenses.filter(a => a.typeOfExpenseId === element.typeOfExpenseId).forEach(expense => {
            this.expenseTypeSum += expense.amount;
          });
          this.doughnutChartData[0].push(this.expenseTypeSum);
          this.expenseSum += this.expenseTypeSum;
        }
      });
    });
    console.log(this.expenses);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
