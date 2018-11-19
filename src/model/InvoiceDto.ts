import { InvoiceClient } from "./InvoiceClientDto";

export class Invoice {

    
    btw:Number; 
    nettoAmount:Number; 
    brutoAmount:Number;
    expenses:Number; 
    date:Date;
    client:InvoiceClient;
    user:Object; 
	


}
