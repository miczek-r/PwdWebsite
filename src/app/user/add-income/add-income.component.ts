import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExpenseService } from 'src/app/_services/_expenseService/expense.service';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.scss']
})
export class AddIncomeComponent implements OnInit {

  form: any = {};
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddIncomeComponent>,
    private expenseService: ExpenseService,
    private snackBar: MatSnackBar
  ) { }




  ngOnInit(): void {
  }

  onSubmit(): void {
    this.form['ownerId'] = this.data.user.userId;
    this.form['typeOfExpenseId'] = 1;
    this.expenseService.AddExpense(this.form).subscribe(
      data => {
        this.dialogRef.close("reload");
      },
      err => {
        this.snackBar.open(err, 'Close', { duration: 2000, });
      }
    );
  }

}
