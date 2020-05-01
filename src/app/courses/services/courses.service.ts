import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
// {
//   providedIn: 'root'
// }
export class CoursesService {
  title= 'CoursesService'
  private _courseSubject= new BehaviorSubject(null);
  private _apiURI =
    'https://afternoon-falls-30227.herokuapp.com/api/v1/courses';

  // private _courses = [
  //   {
  //     id : 1,
  //     title : 'NodeJs',
  //     ins : 'Mayar',
  //     isAvaliable : true,
  //   },
  //   {
  //       id:2,
  //       title:"HTML",
  //       ins:"Ahmed",
  //       isAvaliable : false,
        
  //   },
  //   {
  //       id:3,
  //       title:"JS",
  //       ins:"Mayar",
  //       isAvaliable :false
  //   }
  // ];
  constructor(private _http: HttpClient) {
    
   }
   changeCourseData(data){
     this._courseSubject.next(data);
   }
   get CourseSubject(){
    return this._courseSubject.asObservable();
   }
  //  params = {}
   getCourses(params = {}) {
    // return this._courses;
    return this._http.get(this._apiURI,{ params });
  }

  getCourseById(id) {
    // return this._courses.find((course) => course.id == id);
    return this._http.get(`${this._apiURI}/${id}`);
  }

  addCourse(course) {
    // this._courses.push(course);
    return this._http.post(this._apiURI, course);
  }
   
}
