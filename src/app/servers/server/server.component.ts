import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id']; //this will be parsed to a string, not a number. so add + in front of expression

    this.server = this.serversService.getServer(id);

    this.route.params.subscribe(
      (params: Params) =>{
        this.server = this.serversService.getServer(+params['id']);
      }
    );
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'}); //relative path; preserve the active query params -> merge would be: use the new ones if there are
  }

}
