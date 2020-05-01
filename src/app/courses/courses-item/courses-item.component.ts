import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { CoursesService } from '../services/courses.service'

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.css']
})
export class CoursesItemComponent implements OnInit {

  constructor(private _coursesService:CoursesService) { 
    // console.log(_coursesService); 
  }

  ngOnInit(): void {
  }
  // @Input()title:string;
  // @Input()ins:string;
  // @Input()isAvailable:boolean;
  @Input('courseData') course;
  @Output() courseClick = new EventEmitter<string>();
  
  

  onClick(ev) {
    // console.log(ev);
    this.courseClick.emit(this.course.title);
  }
}
