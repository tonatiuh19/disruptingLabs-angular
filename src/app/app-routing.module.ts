import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './pages/course/course.component';
import { HomeComponent } from './pages/home/home.component';
import { VideoHomeComponent } from './pages/video-home/video-home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: VideoHomeComponent },
  {
    path: 'curso-construyendo-tu-aplicacion-de-lugares',
    component: CourseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
