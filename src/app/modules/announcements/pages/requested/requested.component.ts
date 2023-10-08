import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '@services/announcements/announcement.service';
import { IAnnouncement } from 'src/app/core/models/announcement.model';

@Component({
  selector: 'app-requested',
  templateUrl: './requested.component.html',
  styleUrls: ['./requested.component.scss']
})
export class RequestedComponent implements OnInit {
  announcements: IAnnouncement[] = []
  constructor(private _announcementService:AnnouncementService){}

  ngOnInit() {
    this._announcementService.getAnnouncements().subscribe((announcements)=>
    {
      this.announcements =  announcements
    })
  }
}
