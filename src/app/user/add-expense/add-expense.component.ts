import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { ExpenseType } from 'src/app/models/expenseType/expense-type';
import { ExpenseService } from 'src/app/_services/_expenseService/expense.service';
import { MatNativeDateModule } from '@angular/material/core';
import { User } from 'src/app/models/user/user';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {

  form: any = {};
  expenseTypes: ExpenseType[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddExpenseComponent>,
    private expenseService: ExpenseService,
    private snackBar: MatSnackBar
  ) {

    this.expenseService.GetAllExpenseTypes().subscribe((response) => {
      this.expenseTypes = response.filter(a => a.typeOfExpenseId !== 1);
    });

  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.form['ownerId'] = this.data.user.userId;
    console.log(this.form);
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
