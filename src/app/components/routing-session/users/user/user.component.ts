import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user!: { id: number; name: string; };

  paramsSubscription!: Subscription;

  constructor(private route:  ActivatedRoute) { }
  

  ngOnInit() {
    
    const id = this.route.snapshot.params['id'];
    const name = this.route.snapshot.params['name'];
    this.user = {id:id,name:name}
    console.log('UserComponent',id, name)

    this.paramsSubscription = this.route.params.subscribe((params:Params)=>{
      this.user.id = params['id']
      this.user.name = params['name']
    })
  }

   ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
