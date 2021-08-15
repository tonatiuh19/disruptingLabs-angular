import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/services/course1content.service';
import { Course1 } from '../../../interfaces/courses.interface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  constructor(private courseService: CoursesService) {}

  courseContent: Course1[] = [];

  get course(): Course1[] {
    return this.courseService.course;
  }

  ngOnInit(): void {
    this.courseContent = this.course;
  }

  changeContent(sectionId: number) {
    this.courseContent = this.courseService.getContent(sectionId);
  }
}
