import { Injectable } from '@angular/core';


@Injectable()
/*Service*/
export class LogSrv {

     /*msg: string;
    Function returning the array of object*/

     log(msg) {
        console.log(msg);
     }
     info(msg) {
        console.log('Info: ' + msg);
     }
     Warn(msg) {
        console.warn('Warn: ' + msg);
     }
     clear() {
        console.clear();
     }
}
