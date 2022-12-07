import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    NgbProgressbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
