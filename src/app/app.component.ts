import { Component, OnInit  } from '@angular/core';
import { FamilyMember } from './app.service';
import { TitleMrMrs } from './app.service1';
import { LogSrv } from './logger.service';
import { Member, Title } from './app.member';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FamilyMember]              /*Giving Service name in Provider */
})
export class AppComponent implements OnInit  {
    namep: string;
    agep: number;
    fname: string;
    fage: number;
    len: number;
    Inmsg: string;
    flag: string;

    FAMILYARRAY: Member[];
    FAMILYDetail: Member;
    FAMILYtitle: Title[];

    /* Using service in Contructor */
    constructor(private familymember: FamilyMember, private titlemrmrs: TitleMrMrs,
                private logsrv: LogSrv  ) {}

    ngOnInit() {
      /* Log clear from Logger service */
      this.logsrv.clear();
      this.fname = `Name`;
      this.fage = 0 ;
      this.FAMILYtitle  = this.titlemrmrs.getTitle();
    }

   /* console.log(this.FAMILYtitle[0]);
    console.log(this.FAMILYtitle[1]);*/

    /*Add member function on click will add new members.*/
    addmember(namep, agep) {
      this.logsrv.clear();
      this.FAMILYtitle  = this.titlemrmrs.getTitle();

      if ((namep === `Name`) || (agep === 0) ) {
        this.Inmsg = `Please provide valid inputs`;
        console.log(this.Inmsg);
        /* Waring message for the wrong input */
        this.logsrv.Warn(`Please provide valid inputs`);

    } else {
      this.FAMILYDetail = {
        name: namep,
        age: agep
      };
      this.Inmsg = `Adding......`;
      /* Adding info */
      this.logsrv.log(this.Inmsg);
      this.familymember.addFamilyFunction(this.FAMILYDetail);
      this.Inmsg = `Faimly Member is added successfully.`;
      /* Successful additon notification */
      this.logsrv.log(this.Inmsg);
      this.flag = 'S';
    }
    if (this.flag === 'S') {
    this.Inmsg = `Retriving....`;
    /* Retrival Message */
    this.logsrv.log(this.Inmsg);
     /*Get all the memebers currently in the system*/
     this.FAMILYARRAY  = this.familymember.getFamilyFunction();
     this.len = this.FAMILYARRAY.length;
     this.Inmsg = `Exsisting members.`;
     /* Completion of retrival. */
     this.logsrv.log(this.Inmsg);
    }
    }
}
