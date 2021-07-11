import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './app-data';
import { MessagesModule } from './core/modules/messages/messages.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule, NGXS_PLUGINS } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { logoutPlugin } from './core/reducers/logoutPlugin';
import { GlobalStore } from './core/store/global.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    InMemoryWebApiModule.forRoot(AppData, { delay: 1000 }),
    MessagesModule,
    HttpClientModule,
    NgxsModule.forRoot([GlobalStore], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [
    {
      provide: NGXS_PLUGINS,
      useValue: logoutPlugin,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
