import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnouncementService } from '@services/announcements/announcement.service';
import { ImagesService } from '@services/images/images.service';
import { map, switchMap } from 'rxjs';
import { IAnnouncement } from 'src/app/core/models/announcement.model';
import { IViewAnnouncement } from 'src/app/core/models/viewAnnouncements.model';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit{
  announcement:IViewAnnouncement| null =null 
  isLoading: boolean = true
  constructor(
    private _announcementService: AnnouncementService,  
    private _activatedRoute: ActivatedRoute,
    private _imagesService: ImagesService){}

  ngOnInit(): void {
this._activatedRoute.params.pipe(
  switchMap((data)=>{
    return this._announcementService.getAnnouncement(data['id'])
  }),
  map((value)=>{
    value.images = (value.imagesIds ?? []).map((item:string)=>{
      return this._imagesService.getImageUrl(item)
    })
    delete value['imagesIds'] 
    return  value
  })
).subscribe((data: IViewAnnouncement)=>{
  this.announcement = data  
  this.isLoading = false
})
  }
}
