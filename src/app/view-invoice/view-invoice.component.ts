import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../service/invoice.service';
import { Invoice } from '../../model/InvoiceDto';
import { InvoiceClient } from 'src/model/InvoiceClientDto';



@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.css']
})
export class ViewInvoiceComponent implements OnInit {


  testInvoice:Invoice
  testInvoice2:Invoice
  public jsonObject: any;
  clientName:String; 
  public jsonParsed: any; 
  






  constructor(private service:InvoiceService) { }

  ngOnInit() {
  }

 
  
  

  showInvoices(){
    
    var deDiv = document.getElementById("invoices");
      deDiv.innerHTML = '<tr> <th>Btw</th> <th>Bruto Amount</th> <th>Netto Amount</th>  <th>Expenses</th> </tr>';

      this.service.getInvoice("http://localhost:9090/api/invoice/all").subscribe(
        data2 => {
          this.testInvoice=data2;
          console.log(this.testInvoice)
          

          alert(this.testInvoice); 

     //     var invoicedata =  '<tr btw = AA'+this.testInvoice.btw+'> <th>'+this.testInvoice.brutoAmount+'</th> <th>'+this.testInvoice.nettoAmount+'</th> <th>'+this.testInvoice.expenses+'</th> </tr>';
     //   deDiv.innerHTML = deDiv.innerHTML + invoicedata;

     var invoicedata =  '<tr> <th>'+this.testInvoice.btw+'</th> <th>'+this.testInvoice.brutoAmount+'</th>  <th>'+this.testInvoice.nettoAmount+'</th> <th>'+this.testInvoice.expenses+'</th> </tr>';
        deDiv.innerHTML = deDiv.innerHTML + invoicedata;

    // kijken hoe array(list) gemaakt kan worden?   this.service.getInvoice("http://localhost:9090/api/invoice/all").subscribe(
     //   data2 => {
      //    this.invoiceList=data2;       


       
  })

  }

  retrieveJson() {
    //var deDiv = document.getElementById("invoices");
    //  deDiv.innerHTML = '<tr> <th>Btw</th> <th>Bruto Amount</th> <th>Netto Amount</th>  <th>Expenses</th> </tr>';
    this.service.myServiceMethod().subscribe(
      jsonObject => this.jsonObject = jsonObject);

      //var myJSON = JSON.stringify(this.jsonObject, ['client']); 
     // alert(myJSON)
      //this.clientName = myJSON;

      console.log(this.jsonObject);


    //  const myObjStr = JSON.stringify(this.jsonObject);

    // const myObjStr2 = JSON.parse(this.jsonObject, ['client']);  

   // var myJSON = JSON.stringify(this.jsonObject, ['client']); 
   

   

//console.log(myObjStr);
//console.log(myJSON);

//const myObjStr3 = JSON.parse(myObjStr)
//console.log(myObjStr3);
      
          
  }


}













