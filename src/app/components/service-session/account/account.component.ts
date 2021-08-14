import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input()
  account!: { name: string; status: string; };
  @Input()
  id!: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private logService:LoggerService){

  }


  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    // const service = new LoggerService();
    // service.logMe(status);
    this.logService.logMe(status);
  }
}
