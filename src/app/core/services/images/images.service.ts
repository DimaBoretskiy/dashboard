import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private _baseUrl: string = '/api/Images/' 
  constructor(private _http: HttpClient) {
  }
  getImageUrl (id: string ):string{
    return  this._baseUrl+id 
  }
}
