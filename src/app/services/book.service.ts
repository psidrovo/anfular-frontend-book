import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../domain/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) {  }

 
  Url='http://localhost:8080/api/book';

  findAll(){
    return this.http.get(this.Url);
  }

}
