import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, private router: Router, private currentRoute: ActivatedRoute) { } //ActivatedRoute: inject the current active route, in this case
  //the route for the ServersComponent (see app.module for the path)

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(){
    //using relative path to reload
    this.router.navigate(['servers'], {relativeTo: this.currentRoute}); //current active route would be 'http://localhost:4200/servers', so 'servers' in the array would lead to error
  }

}
