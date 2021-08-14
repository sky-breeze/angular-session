import { Injectable } from '@angular/core';

import { LoggerService } from "./logger.service";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private logService:LoggerService) { }

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];


  onAccountAdded( account:any ) {
    this.accounts.push({name:account.name,status:account.status});
    this.logService.logMe(account.status);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    this.logService.logMe(updateInfo.newStatus);
  }




  
}
