import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }

  handleLoadServer(){
    // alert('Hey,you clicked Me!')
    //calcualtion
    // got the result
    // if(success){
      // this.router.navigate(['/servers'])
    // }
    this.router.navigate(['servers'],{relativeTo:this.route})
    
  }

  editLoadServer(id:number){
    this.router.navigate(['/servers'],{queryParams:{allowEdit:id},fragment:'loading'})
  }

}
