import { MyService } from './services/my.service';
import { WebService } from './services/web.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-rating';
import { Ng2TableModule } from 'ng2-table/ng2-table';

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
import { ContentProjComponent } from './content-proj/content-proj.component';
import { LocalRefsComponent } from './local-refs/local-refs.component';
import { DirectivesComponent } from './directives/directives.component';
import { MagicDivDirective } from './directives/magic-div.directive';
import { MyTableComponent } from './my-table/my-table.component';
import { UnlessDirective } from './directives/unless.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ServicesComponent } from './services/services.component';
import { FbComponent } from './services/fb.component';
import { InstaComponent } from './services/insta.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateDrivenComponent } from './forms/template-driven.component';


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
    BtnPanelComponent,
    ContentProjComponent,
    LocalRefsComponent,
    DirectivesComponent,
    MagicDivDirective,
    MyTableComponent,
    UnlessDirective,
    LifecycleComponent,
    ServicesComponent,
    FbComponent,
    InstaComponent,
    FormsComponent,
    TemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RatingModule,
    Ng2TableModule
  ],
  providers: [WebService, MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
