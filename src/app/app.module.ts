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
// import { LoggerService } from './services/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    CustomDirectiveComponent,
    AccountComponent,
    NewAccountComponent,
    AccountDetailsComponent,
    UnlessDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
