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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGaurd } from './services/auth-gaurds.service';
import { AuthService } from './services/auth.service';
import { ObserableSessionComponent } from './components/obserable-session/obserable-session.component';
import { CanDeactivateGuard } from './components/routing-session/servers/edit-server/can-deactivate-gaurd.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './components/routing-session/servers/server/server-resolver.service';



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
    ServerComponent,
    PageNotFoundComponent,
    ObserableSessionComponent,
    ErrorPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ServersService, AuthGaurd, AuthService, CanDeactivateGuard, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
