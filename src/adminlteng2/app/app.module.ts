import { NgModule,OpaqueToken  }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule }  from './app-routing.module';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './layout/header.component';
import { MainSidebarComponent } from './layout/mainsidebar.component'
import {FooterComponent} from './layout/footer.component'

import {ADirective} from './directives/app.directive'

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule
   ],
  declarations: [ 
    AppComponent,
    HeaderComponent ,
    MainSidebarComponent,
    FooterComponent,
    ADirective
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 



}




