import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HelloInComponent } from './hello/hello-in.component';
import { HelloSameComponent } from './hello/hello-same.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { FbLoginComponent } from './view-encapsulation/fb-login.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropComponent } from './databinding/prop.component';
import { EvntComponent } from './databinding/evnt.component';
import { InterCompComComponent } from './inter-comp-com/inter-comp-com.component';
import { ContentComponent } from './inter-comp-com/content.component';
import { BtnPanelComponent } from './inter-comp-com/btn-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HelloInComponent,
    HelloSameComponent,
    ViewEncapsulationComponent,
    FbLoginComponent,
    DatabindingComponent,
    PropComponent,
    EvntComponent,
    InterCompComComponent,
    ContentComponent,
    BtnPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
