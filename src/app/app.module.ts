import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SingleviewcomponentComponent } from './singleviewcomponent/singleviewcomponent.component';
import { FilterDataPipe } from './filterdata.pipe';
import { OrderdataPipe } from './orderdata.pipe';
import { OrderModule } from 'ngx-order-pipe';
import {FormsModule} from "@angular/forms";

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleviewcomponentComponent,
    FilterDataPipe,
    OrderdataPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    OrderModule,
    HttpClientModule,
    AppRoutingModule,
    Ng4LoadingSpinnerModule,

    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
