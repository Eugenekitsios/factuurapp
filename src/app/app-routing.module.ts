import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component'; 
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component'; 

const routes: Routes = [
  {
    path: 'addInvoice',
    component: InvoiceComponent
  },
  {
    path: 'viewInvoice',
    component: ViewInvoiceComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
