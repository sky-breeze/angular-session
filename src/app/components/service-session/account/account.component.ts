import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  
})
export class AccountComponent implements OnInit {
  @Input()
  account!: { name: string; status: string; };
  @Input()
  id!: number;
  

  accounts:any = [];
  constructor(private accountService: AccountService){

  }
  ngOnInit(): void {

    
    
  }


  onSetTo(status: string) {
    this.accountService.onStatusChanged({id: this.id, newStatus: status})
    // this.logService.logMe(status);
  }

  
}
