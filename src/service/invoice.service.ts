import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Invoice } from '../model/InvoiceDto'
import { map } from 'rxjs/operators';
import { InvoiceClient } from 'src/model/InvoiceClientDto';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) {

   }

   postinvoice(date:Date, brutoAmount:number, nettoAmount:number, btw:number, A:InvoiceClient) : Observable<Invoice>{
    var invoice= new Invoice
    invoice.date = date
    invoice.brutoAmount = brutoAmount
    invoice.nettoAmount = nettoAmount
    invoice.btw = btw
    invoice.client = A
   // invoice.client = client
    
    return this.http.post<Invoice>("http://localhost:9090/api/invoice", invoice);
  }

  getInvoice(invoiceUrl) : Observable<Invoice>{
    
    return this.http.get<Invoice>(invoiceUrl);
  }


  public myServiceMethod(): Observable<Object> {
    return this.http.get('http://localhost:9090/api/invoice/all');
    
  }

 


               

}
