// import { v1 as uuidv1 } from 'uuid';
export class Course {
    // id = uuidv1();
    constructor(
      public title: string = '',
      public instructor: string = '',
      public isAvailabel: boolean = true
    ) {
      // this.title = title;
    }
  }
  