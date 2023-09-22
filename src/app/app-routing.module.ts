import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/announcements/announcements.module').then(
        (m) => m.AnnouncementsModule
      ),
  },
  {
    path: 'my-announcement',
    loadChildren: () =>
      import('./modules/my-announcement/my-announcement.module').then(
        (m) => m.MyAnnouncementModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}