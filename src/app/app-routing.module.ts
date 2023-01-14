import { NgModule } from "@angular/core";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { Routes, RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from "./auth-guard.service";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent}
    ]},
    {path: 
      'servers',
       //canActivate:[AuthGuard], //canActivate is the AuthGuard, see auth-guard.service.ts. AuthGuard and AuthService ave to be added in app.module
       canActivateChild:[AuthGuard],
       component: ServersComponent, 
       children:[ 
        {path: ':id', component: ServerComponent}, //for child routes we then also use <router-outlet> element
        {path: ':id/edit', component: EditServerComponent}
        ]
    },
    {path: 'not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/not-found'} //catch all paths that does not exist. must be the last entry in the path array
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule] //if we export this module to another module (in this case 'app.module'), what should be accessible for the using module?
})
export class AppRoutingModule{


}