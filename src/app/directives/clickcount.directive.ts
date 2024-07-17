import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'button[clickcount]'
})
export class ClickcountDirective {

  numberOfClicks = 0;

  @HostListener('click')
  onclick(){
    console.log(`number of times clicked ${this.numberOfClicks++}`);
  }
}
