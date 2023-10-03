import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: 'create-announcement',
    loadChildren: () =>
      import('./modules/create-announcement/create-announcement.module').then(
        (m) => m.CreateAnnouncementModule
      ),
  },
  {
    path: 'my-announcement',
    loadChildren: () =>
      import('./modules/my-announcement/my-announcement.module').then(
        (m) => m.MyAnnouncementModule
      ),
  },
  {
    path: 'settings-page',
    loadChildren: () =>
      import('./modules/settings-page/settings-page.module').then(
        (m) => m.SettingsPageModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/announcements/announcements.module').then(
        (m) => m.AnnouncementsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}