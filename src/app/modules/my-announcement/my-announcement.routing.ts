import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAnnouncementComponent } from './pages/my-announcement/my-announcement.component';




const routes: Routes = [

    {
    path: '',
    component: MyAnnouncementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAnnouncementRoutingModule {}