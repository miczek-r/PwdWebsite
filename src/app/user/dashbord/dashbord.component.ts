import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense/expense';
import { User } from 'src/app/models/user/user';
import { AuthService } from 'src/app/_services/_authService/auth.service';
import { ExpenseService } from 'src/app/_services/_expenseService/expense.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  user:User;
  expenses:Expense[];
  constructor(private authService: AuthService,private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.expenseService.GetUserExpenses(this.user.userId).subscribe((data)=>{
      this.expenses=data;
    });
  }

logout(){
  this.authService.logout();
  window.location.reload();
}

}
