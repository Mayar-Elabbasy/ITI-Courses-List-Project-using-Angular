import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onLimitChange(ev) {
    console.log(ev.target.value);
    const value = ev.target.value;
    this._router.navigate(['/courses'], {
      queryParams: { limit: value },
      queryParamsHandling: 'merge',
    });
  }
}
