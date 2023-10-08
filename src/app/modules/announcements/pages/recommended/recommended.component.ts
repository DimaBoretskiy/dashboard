import { Component } from '@angular/core';
import { IAnnouncement } from 'src/app/core/models/announcement.model';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent {
  announcements: IAnnouncement[] = []
}
