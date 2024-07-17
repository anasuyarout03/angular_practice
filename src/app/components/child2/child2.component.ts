import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Child2Component {

  @Input() aChild2:any;
  
  @Input() child1: any;

  @Input() arr:any;

  constructor(private cdr: ChangeDetectorRef)  {}
  // refresh(){
  //   this.cdr.markForCheck();
  // }
  ngDoCheck(): void {
    this.cdr.markForCheck();
  }
}
