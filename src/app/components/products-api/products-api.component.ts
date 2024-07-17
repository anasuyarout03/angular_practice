import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products-api',
  templateUrl: './products-api.component.html',
  styleUrls: ['./products-api.component.css']
})
export class ProductsApiComponent {

  products: any = [];

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    let url = 'https://fakestoreapi.com/products';
    
    this.httpClient.get(url).subscribe((response) => {
      this.products = response;
      console.log(response);
    })
  }
}
