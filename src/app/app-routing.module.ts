import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObserableSessionComponent } from './components/obserable-session/obserable-session.component';
import { HomeComponent } from './components/routing-session/home/home.component';
import { EditServerComponent } from './components/routing-session/servers/edit-server/edit-server.component';
import { ServerComponent } from './components/routing-session/servers/server/server.component';
import { ServersComponent } from './components/routing-session/servers/servers.component';
import { UserComponent } from './components/routing-session/users/user/user.component';
import { UsersComponent } from './components/routing-session/users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGaurd } from './services/auth-gaurds.service';

const routes: Routes = [


  { path: '', component: HomeComponent },
  { path: 'obserable', component: ObserableSessionComponent },

  {
    path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
    ]
  },
  {
    path: 'servers',
    // canActivate:[AuthGaurd],
    canActivateChild: [AuthGaurd],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent },
    ]
  },
  { path: 'pagenotfound', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'pagenotfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
