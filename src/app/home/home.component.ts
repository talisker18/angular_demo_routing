import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loadServers(id: number){
    //do your stuff here
    //and then load the server tab

    //in the following we use routerLink the programmatic way. see also usecase in a html file: servers.component.html
    this.router.navigate(['/servers',id, 'edit'], {queryParams: {allowEdit:'1'}, fragment: 'loading'}); //in the array, define the path parts, like /servers/server2 -> this would be ['/servers', '/server2']
  }

}
