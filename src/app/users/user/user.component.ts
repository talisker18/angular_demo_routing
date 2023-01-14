import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { } //in the ActivatedRoute we can retrieve also the id of the user

  ngOnInit() {
    //following code will not update the info of the user displayed when we hit for example '/users/10/joel' 
    //if we are already showing details about an other user, for example 'users/1/max'. no error will be shown
    //the reason: we are showing already an UserComponent, in this case max with id 1. So angular will not reload the component when we hit joel with id 10 and the route parameters are not updated
    //solution: use Observable 'params' additionally to update if mentioned use case occurs
    this.user = {
      id: this.route.snapshot.params['id'], 
      name: this.route.snapshot.params['name']
    };

    //update route params, if needed (see comment above)
    this.paramsSubscription = this.route.params.subscribe( //params = observable, so we can subscribe
    (params: Params) => { //whenever the route parameters change, the function body will be executed
      this.user.id = params['id'];
      this.user.name = params['name'];
    }
    );
  }

  ngOnDestroy() {
    //following is actually not necessary because Angular automatically destroys the component when we, for example, go to servers tab
    //and then also unsubscribes the Observable of params (also for all route Observables). But it would be necessary (?) if we would use a custom Observable
    this.paramsSubscription.unsubscribe();
  }

}
