import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnouncementService } from '@services/announcements/announcement.service';
import { IAnnouncement } from 'src/app/core/models/announcement.model';

@Component({
  selector: 'app-requested',
  templateUrl: './requested.component.html',
  styleUrls: ['./requested.component.scss']
})
export class RequestedComponent implements OnInit {
  announcements: IAnnouncement[] = []
  constructor(
    private _announcementService:AnnouncementService,
    private _route: ActivatedRoute,){}
private _initLoading(){
  this._route.queryParams.subscribe((value) => {
    let body = {
      search: value['search'],
      category: value['categoryId'],
      
    }
    this._announcementService.getAnnouncements(body).subscribe((announcements)=>
    {
      this.announcements =  announcements
    })
  })
}
  ngOnInit() {
    this._initLoading()
  }
}
