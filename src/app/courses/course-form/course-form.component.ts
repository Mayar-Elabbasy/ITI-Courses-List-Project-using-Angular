import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
// import { course } from '../models/courses.model';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  course = new Course();
  constructor(private _coursesService:CoursesService,
    private _router:Router) { 
    // console.log(_coursesService);  
  }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    if(form.valid){
      // console.log(form);
      const course = { ...this.course };
      this._coursesService.addCourse(course);
      this._coursesService.addCourse(form.value);
      form.reset();
      this._coursesService.addCourse(course).subscribe((res: any) => {
        if (res.status) {
          this._router.navigate(['/courses', res.data]);
        }
    });    
  }
  }
}
