import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from "rxjs";
import { ICategory } from '../models/category.modules';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private _baseUrl: string = '/api/Categories' 
  constructor(private _http: HttpClient) {
  }
  getCategories(): Observable<any> {

    return this._http.get<ICategory[]>(`${this._baseUrl}`).pipe(
      map((categories) =>{
        return categories
      })
    )
  }

}