import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.css']
})
export class CustomDirectiveComponent implements OnInit {
  evenOdd = true;
  evenNumber = [2,4,6,8];
  oddNumber = [1,3,5,7]

  value:number =4;

  constructor() { }

  ngOnInit(): void {
  }

}
