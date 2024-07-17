import { Component } from '@angular/core';
import * as data from './products.json';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = (data as any).default;

  p: number = 1;

  test(){
    Swal.fire('Good Job!','You clicked the button!','success');
  }
}
