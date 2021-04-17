import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization/authorization.component';
import { DashbordComponent } from './home/dashbord/dashbord.component';
import { TestComponent } from './test/test.component';
import { AuthGuardService as AuthGuard } from './_services/_authGuard/auth-guard.service';

const routes: Routes = [
  { path: 'auth', component: AuthorizationComponent},
  { path: 'home/dashbord', component: DashbordComponent, canActivate:[AuthGuard]},
  { path: 'test', component:TestComponent, canActivate:[AuthGuard]},
  { path: '',   redirectTo: '/home/dashbord', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
