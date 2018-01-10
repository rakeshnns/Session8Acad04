import { Injectable } from '@angular/core';
import { Member } from './app.member';
import { MEMBERS } from './app.member.data';


@Injectable()
/*Service*/
export class FamilyMember {
     MyFamilyMembers: Member[] = [];

     /* get function*/
     getFamilyFunction(): Member[] {
         return this.MyFamilyMembers;
     }
     /* add function */
     addFamilyFunction(MyFamilyMempass: Member) {
      /*  adding elements using unshift */
      this.MyFamilyMembers.unshift(MyFamilyMempass);

     }
}
