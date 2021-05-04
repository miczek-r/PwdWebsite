import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization/authorization.component';
import { DashbordComponent } from './user/dashbord/dashbord.component';
import { SaldoComponent } from './miniCards/saldo/saldo.component';
import { AuthGuardService as AuthGuard } from './_services/_authGuard/auth-guard.service';

const routes: Routes = [
  { path: 'auth', component: AuthorizationComponent},
  { path: 'aasdasd/asdasd', component: SaldoComponent},
  { path: 'user/dashbord', component: DashbordComponent, canActivate:[AuthGuard]},
  { path: '',   redirectTo: '/user/dashbord', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
