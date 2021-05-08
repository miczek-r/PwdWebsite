import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './authorization/login/login.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthorizationComponent } from './authorization/authorization/authorization.component';
import { RemindPasswordComponent } from './authorization/remind-password/remind-password.component';
import { RegisterComponent } from './authorization/register/register.component';
import { SaldoComponent } from './miniCards/saldo/saldo.component';
import { LogoutComponent } from './miniCards/logout/logout.component';
import { ProfileComponent } from './miniCards/profile/profile.component';
import { ExpensesComponent } from './miniCards/expenses/expenses.component';
import { ChartsModule } from 'ng2-charts';
import { DiagramComponent } from './miniCards/diagram/diagram.component';
import { TargetProgressComponent } from './miniCards/target-progress/target-progress.component';
import { IncomeComponent } from './miniCards/income/income.component';
import { CalendarComponent } from './miniCards/calendar/calendar.component';
import { HomeComponent } from './miniCards/home/home.component';
import { ExpenseLimitComponent } from './user/expense-limit/expense-limit.component';
import { ExpenseListComponent } from './user/expense-list/expense-list.component';
import { AddExpenseComponent } from './user/add-expense/add-expense.component';
import { AddIncomeComponent } from './user/add-income/add-income.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { ConfirmEmailComponent } from './authorization/confirm-email/confirm-email.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AuthorizationComponent,
    RemindPasswordComponent,
    RegisterComponent,
    SaldoComponent,
    LogoutComponent,
    ProfileComponent,
    ExpensesComponent,
    DiagramComponent,
    TargetProgressComponent,
    IncomeComponent,
    CalendarComponent,
    HomeComponent,
    ExpenseLimitComponent,
    DashboardComponent,
    ExpenseListComponent,
    AddExpenseComponent,
    AddIncomeComponent,
    UserInfoComponent,
    ConfirmEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
