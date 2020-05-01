import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { from } from 'rxjs';

@Component({
  selector: 'app-courses-info',
  templateUrl: './courses-info.component.html',
  styleUrls: ['./courses-info.component.css']
})
export class CoursesInfoComponent implements OnInit {

  course;
  private _routeParamsSubscription: Subscription;
  constructor(private _coursesService:CoursesService, private _activatedRoute: ActivatedRoute) { 
    // console.log(_coursesService);
    
  }
  

  ngOnInit(): void {
    this._routeParamsSubscription = this._activatedRoute.paramMap.subscribe(
      (paramMap) => {
        // console.log(paramMap);
        if (paramMap.has('id')) {
          const id = paramMap.get('id');
          this.course = this._coursesService.getCourseById(id);
          this._coursesService.getCourseById(id).subscribe((res: any) => {
            if (res.status) {
              this.course = res.data;
            }
          });
        }
      }
    );
    console.log('onInit');
    this._coursesService.CourseSubject.subscribe((data =>{
      // console.log(data);  
      this.course =data;
    }
    )); 
  }

}
