import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HelloInComponent } from './hello/hello-in.component';
import { HelloSameComponent } from './hello/hello-same.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HelloInComponent,
    HelloSameComponent,
    ViewEncapsulationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
