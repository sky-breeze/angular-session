import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
 errorMessage:string = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const errorData = this.route.snapshot.data['message']  ;
    this.errorMessage = errorData;
    const errorData1 = this.route.snapshot.data['message1']  ;
    console.log(errorData)
    console.log(errorData1)
  }

}
