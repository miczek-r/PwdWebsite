import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from 'src/app/models/expense/expense';
import { ExpenseType } from 'src/app/models/expenseType/expense-type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(public http:HttpClient) { }

  GetUserExpenses(id:number): Observable<Expense[]>{
    return this.http.get<Expense[]>(environment.webAPI+'/Expense/UserId/'+id);
  }
  GetAllExpenseTypes(): Observable<ExpenseType[]>{
    return this.http.get<ExpenseType[]>(environment.webAPI+'/Expense/GetAllExpenseTypes');
  }
}
