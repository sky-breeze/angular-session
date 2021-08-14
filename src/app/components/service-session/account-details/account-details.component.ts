import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css'],
  providers: [AccountService,LoggerService]
})
export class AccountDetailsComponent implements OnInit {
  accounts:any = [];
  constructor(private accountService: AccountService,private logService:LoggerService) { }

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }

  

  onStatusChanged(id:number,status:string){
    console.log('====>',id)
    console.log('====>',status)
    this.accountService.onStatusChanged({id:id,newStatus:status})
    this.logService.logMe(status);
  
  }

}
