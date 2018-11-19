import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ClientComponent } from './client/client.component';
import { UserComponent } from './user/user.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    ClientComponent,
    UserComponent,
    SidebarComponent,
    ViewInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
