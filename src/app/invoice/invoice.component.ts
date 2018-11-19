import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../model/InvoiceDto';
import { InvoiceService } from '../../service/invoice.service';
import { InvoiceClient} from '../../model/InvoiceClientDto';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  public dto = new Invoice(); 
  btw:number;
  brutoAmount:number;
  nettoAmount:number;
  expenses:number;
  invoice2:Invoice; 
  date:Date;
  clientName:String; 
  invoiceClient:InvoiceClient; 

  constructor(private service:InvoiceService) { }



  ngOnInit() {
  }

  onSubmit(){
    alert(this.clientName)
    var A = new InvoiceClient;
    A.name = this.clientName; 
    alert(A.name)
   
    this.service.postinvoice(this.date, this.brutoAmount, this.nettoAmount, this.btw, A).subscribe(data=>{
      this.invoice2=data;
      console.log(data)
    })
  }

  onSubmit2(){
    alert("test");
  }

}
