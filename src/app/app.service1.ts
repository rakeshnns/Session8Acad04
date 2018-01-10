import { Injectable } from '@angular/core';



@Injectable()
/*Service*/
export class TitleMrMrs {
    /* Array of object */
     Mytitle = [{title: 'Mr'}, {title: 'Mrs'}];

    /* Function returning the array of object*/
     getTitle() {
        return this.Mytitle;
     }
}
