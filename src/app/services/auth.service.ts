import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Credentials } from '../core/models/credentials';
import { environment } from '../shared/environments/environment';
import { Observable } from 'rxjs';
import { Jwt } from '../core/models/jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = environment.baseUrl;
  httpClient:HttpClient=inject(HttpClient);

  login(credential:Credentials):Observable<Jwt>{
    return this.httpClient.post<Jwt>(this.baseUrl+`/Auth/login`,credential)
  }
}
