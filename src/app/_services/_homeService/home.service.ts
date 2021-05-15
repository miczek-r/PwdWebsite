import { User } from './../../models/user/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Home } from 'src/app/models/home/home';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  GetHomeByUserId(id: number): Observable<Home> {
    return this.http.get<Home>(environment.webAPI + '/Home/' + id);
  }

  GetHomeUsers(homeId: number): Observable<User[]> {
    return this.http.get<User[]>(environment.webAPI + '/Home/AllHomeUsers/' + homeId);
  }
}
