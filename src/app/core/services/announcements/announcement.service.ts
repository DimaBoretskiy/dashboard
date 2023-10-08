import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IAnnouncement } from '../../models/announcement.model';

@Injectable({
  providedIn: 'root'
})


export class AnnouncementService {
  private _baseUrl: string = '/api/Advert/search' 
  constructor(private _http: HttpClient) {
  }


  getAnnouncements(body: {search?:string, showNonActive?: boolean, category?: string} = {}
 ): Observable<any> {
    return this._http.post<IAnnouncement[]>(`${this._baseUrl}`,body).pipe(
      map((announcements) =>{
        return announcements
      })
    )
  }


}
