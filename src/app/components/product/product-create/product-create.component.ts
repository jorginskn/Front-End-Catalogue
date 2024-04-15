import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css',
})
export class ProductCreateComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  fazeralgo():void{
    console.log('fazendo algo')
  }
}
