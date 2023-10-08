import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendedComponent } from './pages/recommended/recommended.component';
import { AnnouncementComponent } from './pages/announcement/announcement.component';
import { RequestedComponent } from './pages/requested/requested.component';


const routes: Routes = [
  {
    path: 'requested-announcements',
    component: RequestedComponent
  },  
  {
        path: 'announcement/:id',
        component: AnnouncementComponent
      },
    {
    path: '',
    component: RecommendedComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnouncementsRoutingModule {}