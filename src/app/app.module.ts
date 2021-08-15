import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SwiperModule } from 'swiper/angular';
import { VideoHomeComponent } from './pages/video-home/video-home.component';
import { CourseComponent } from './pages/course/course.component';
import { HeaderSecondaryComponent } from './shared/header-secondary/header-secondary.component';
import { CoursesService } from 'src/services/course1content.service';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    VideoHomeComponent,
    CourseComponent,
    HeaderSecondaryComponent,
    LogoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
