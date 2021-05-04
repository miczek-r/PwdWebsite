import { Component, Input, OnInit, } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Expense } from 'src/app/models/expense/expense';
@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent implements OnInit {
  @Input() expenses: Expense[];
  chartData = [
    {
      data: [],
      label: 'Przychody'
    },
    {
      data: [],
      label: 'Wydatki'
    }
  ];

  chartLabels = [ ];

  chartOptions = {
    responsive: true
  };

  expensesSum: number = 0;
  incomeSum: number = 0;

  ngOnInit() {
    for (let index = 5; index >= 0; index--) {
      this.expensesSum = 0;
      this.incomeSum = 0;
      let date = new Date();
      date.setMonth(new Date().getMonth() - index);
      date.setDate(1);
      let afterdate = new Date();
      afterdate.setDate(1);
      afterdate.setMonth(new Date().getMonth() - index + 1);
      this.expenses.forEach(element => {
        if (new Date(element.expenseDate) > date && new Date(element.expenseDate) <= afterdate) {
          if (element.typeOfExpenseId == 1) {
            this.incomeSum += element.amount;
          } else {
            this.expensesSum += element.amount;
          }
        }
      });
      this.chartLabels.push(date.toLocaleString("pl-PL", { month: 'long'}))
      this.chartData[0].data.push(this.incomeSum);
      this.chartData[1].data.push(this.expensesSum);
    }

  }

}
