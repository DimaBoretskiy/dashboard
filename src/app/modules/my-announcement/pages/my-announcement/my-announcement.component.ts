import { Component } from '@angular/core';
import { IAnnouncement } from 'src/app/core/models/announcement.model';


@Component({
  selector: 'app-my-announcement',
  templateUrl: './my-announcement.component.html',
  styleUrls: ['./my-announcement.component.scss']
})
export class MyAnnouncementComponent {
  listItem: IAnnouncement[] = []
}
