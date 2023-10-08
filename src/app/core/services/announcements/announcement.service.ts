import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IAnnouncement } from '../../models/announcement.model';

@Injectable({
  providedIn: 'root'
})


export class AnnouncementService {
  private _baseUrl: string = '/api/Advert' 
  constructor(private _http: HttpClient,) {
  }


  getAnnouncements(body: {search?:string, showNonActive?: boolean, category?: string} = {}
 ): Observable<any> {
    return this._http.post<IAnnouncement[]>(`${this._baseUrl}/search`,body).pipe(
      map((announcements) =>{
        return announcements
      })
    )
  }
  getAnnouncement(id:string): Observable<any> {
       return this._http.get<IAnnouncement[]>(`${this._baseUrl}/${id}`).pipe(
         map((announcement) =>{
           return announcement
         })
       )
     }
   

}
