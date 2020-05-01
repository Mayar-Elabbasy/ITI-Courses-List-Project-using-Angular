import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  
  clickedCourseTitle;
  courses;
  pages: any[];
  currentPage: number = 1;
  constructor(private _coursesService:CoursesService, private _activatedRoute: ActivatedRoute) { 
    // console.log(_coursesService);   
  }

  ngOnInit(): void {
    // this.courses = 
    this._activatedRoute.queryParamMap.subscribe((queryParamMap) => {
      const params = {};
      queryParamMap.keys.forEach(
        (key) => (params[key] = queryParamMap.get(key))
      );
      this._coursesService.getCourses(params).subscribe((res: any) => {
        // console.log(res);
        if (res.status) {
          this.courses = res.data;
          this.currentPage = res.page;
          this.pages = new Array(res.total_pages || 0);
        }
      });
    });
    this._coursesService.getCourses().subscribe((response: any) =>{
      console.log(response);
      if (response.status) {
        this.courses = response.data;    
      }  
    });
  }
  
  onCourseClick(data){
    console.log(data);
    this.clickedCourseTitle=data; 
    
  }

  onCourseItemClick(course) {
    this._coursesService.changeCourseData(course);
  } 

}
