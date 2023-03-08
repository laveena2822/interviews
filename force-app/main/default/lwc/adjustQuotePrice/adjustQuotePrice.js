/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { api , wire} from "lwc";
import LightningModal from 'lightning/modal'; 
import getQuoteByQuoteId from "@salesforce/apex/Controller.getQuoteByQuoteId";
import updateQuote from "@salesforce/apex/Controller.updateQuote";
import { refreshApex } from '@salesforce/apex';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class AdjustQuotePrice extends LightningModal {
  @api recordId;
  adjustedAmountLabel = "Adjusted Amount";
  adjustedAmount = 0;
  handleOkay(){
    this.close('Okay');
  }
  record;
  @wire(getQuoteByQuoteId, {quoteId : '$recordId'})
  getQuoteByQuoteId(result){
     if(result.data){
        this.record = result;
        this.adjustedAmount = result.data.quotedAmount;
     }
     else{
       this.record='';
     }
  }
  handleClick(){
    let param = {Id : this.recordId, TotalQuotedAmount__c : this.template.querySelector('lightning-input[data-field="totalquoteamount"]').value};
    updateQuote({quote : param })
    .then(result=>{
      this.dispatchEvent(new ShowToastEvent({
          title: 'Success',
          message: 'Total Quoted Amount Updated',
          variant: 'success'
      }));
      this.close('okay');
      refreshApex(this.record);
  })
    .catch((error) =>{
      this.dispatchEvent(
        new ShowToastEvent({
             title: 'Error',
             message: error.getmessage(),
             variant:'Error'
        })
    );
    this.close('okay');  
      })
      
  }
}
