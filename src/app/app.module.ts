import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { NodeComponent } from './containers/node/node.component';
import { HistoryComponent } from './containers/history/history.component';

import { HistoryService } from './services/history.service'
import { CommandControlService} from './services/command-control.service'

const COMPONENTS = [ 
  AppComponent,
  HomeComponent,
  NodeComponent,
  HistoryComponent
]

const SERVICES = [
  HistoryService,
  CommandControlService
]

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: COMPONENTS,
  providers: SERVICES,
  bootstrap: [AppComponent]
})
export class AppModule { }
