import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  RegisterUser(user: User): Observable<any> {
    return this.http.post(environment.webAPI + '/User', user);
  }

  GetPasswordRestorationToken(email: string): Observable<any> {
    return this.http.put(environment.webAPI + '/User/GetPasswordRestorationToken/' + email, email);
  }

  UpdateUser(user: User): Observable<any> {
    const userId = user.userId;
    return this.http.put(environment.webAPI + '/User/' + userId, user);
  }

  GetUser(userId: number): Observable<User> {
    return this.http.get<User>(environment.webAPI + '/User/' + userId);
  }
}
