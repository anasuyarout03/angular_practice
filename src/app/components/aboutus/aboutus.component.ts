import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {

  constructor(private routerObj: Router) {}

  doSomethingAndGoToCareers() {
    for( let i = 1 ; i <= 1000 ; i++){
        console.log('Doing Something..')
    }
    this.routerObj.navigateByUrl('/careers');
  }
}
