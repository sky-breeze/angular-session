import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './directive/basic-highlight.directive';
import { BetterHighlightDirective } from './directive/better-highlight.directive';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { AccountComponent } from './components/service-session/account/account.component';
import { NewAccountComponent } from './components/service-session/new-account/new-account.component';
import { AccountDetailsComponent } from './components/service-session/account-details/account-details.component';
import { UnlessDirective } from './directive/unless.directive';
import { RoutingSessionComponent } from './components/routing-session/routing-session.component';
import { HomeComponent } from './components/routing-session/home/home.component';
import { ServersComponent } from './components/routing-session/servers/servers.component';
import { UsersComponent } from './components/routing-session/users/users.component';
import { UserComponent } from './components/routing-session/users/user/user.component';
import { EditServerComponent } from './components/routing-session/servers/edit-server/edit-server.component';
import { ServerComponent } from './components/routing-session/servers/server/server.component';
import { ServersService } from './components/routing-session/servers/servers.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// import { LoggerService } from './services/logger.service';

const appRoutes:Routes= [
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'users/:id/:name',component:UsersComponent},
  {path:'servers',component:ServersComponent},
  {path:'servers/:id/:name',component:ServerComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    CustomDirectiveComponent,
    AccountComponent,
    NewAccountComponent,
    AccountDetailsComponent,
    UnlessDirective,
    RoutingSessionComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
