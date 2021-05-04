import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Home } from 'src/app/models/home/home';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  GetHomeByUserId(id:number): Observable<Home>{
    return this.http.get<Home>(environment.webAPI+'/Home/UserId/'+id);
  }
}
