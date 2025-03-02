import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService<T> {

  constructor(protected httpClient:HttpClient, @Inject(String) private url: string) { }

  getAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.url)
  }
  show(id: string):Observable<T>{
    return this.httpClient.get<T>(this.url+`/${id}`);
  }
  delete(id:string):Observable<T>{
    return this.httpClient.delete<T>(this.url+`/${id}`);
  }
  create(resource:T):Observable<T>{
    return this.httpClient.post<T>(this.url,JSON.stringify(resource));
  }
  update(id:string,resource:T):Observable<T>{
    return this.httpClient.put<T>(this.url+`/{id}`,JSON.stringify(resource));
  }
}
