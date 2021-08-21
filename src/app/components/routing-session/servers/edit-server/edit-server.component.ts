import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: any;
  serverName = '';
  serverStatus:string = '';

  constructor(private serversService: ServersService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    console.log('EditServerComponent')
    console.log(this.route.snapshot.queryParams)
    console.log(this.route.snapshot.fragment)

    this.route.queryParams.subscribe();
    this.route.fragment.subscribe();
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

  reLoadServer(){
    this.router.navigate(['/servers'])
  }

}
