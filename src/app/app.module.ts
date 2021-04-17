import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './authorization/login/login.component';
import { DashbordComponent } from './home/dashbord/dashbord.component';
import { TestComponent } from './test/test.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthorizationComponent } from './authorization/authorization/authorization.component';
import { RemindPasswordComponent } from './authorization/remind-password/remind-password.component';
import { RegisterComponent } from './authorization/register/register.component';
import { SaldoComponent } from './miniCards/saldo/saldo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbordComponent,
    TestComponent,
    AuthorizationComponent,
    RemindPasswordComponent,
    RegisterComponent,
    SaldoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
