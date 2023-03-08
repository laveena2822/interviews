/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement, api, wire, track } from "lwc";
import getQuoteByQuoteId from "@salesforce/apex/Controller.getQuoteByQuoteId";
import updateQuote from "@salesforce/apex/Controller.updateQuote";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class EditQuote extends LightningElement {
  @api recordId;
  @track quoteData = {
    name : '',
    endDate : '',
    startDate : ''
  }
  record;
  @wire (getQuoteByQuoteId, {quoteId : '$recordId'})
  quote(result){
    if(result.data){
      this.quoteData.name = result.data.name;
      this.quoteData.endDate = result.data.endDate;
      this.quoteData.startDate = result.data.startDate;
     }
  }
  renderedCallback() {}

  handleClick(){
    let param = { Id : this.recordId, StartDate__c : this.template.querySelector('[data-fields="start"]').value ,  EndDate__c : this.template.querySelector('[data-fields="end"]').value};
    updateQuote({ quote : param})
    .then(result=>{
       this.dispatchEvent(new ShowToastEvent({
           title: 'Success',
           message: 'Saved Quote Details',
           variant: 'success'
       }));
    })
    .catch(error=>{
      this.dispatchEvent(new ShowToastEvent({
        title: 'Error',
        message: error.getmessage(),
        variant: 'Error'
        }));
    })
  }
}
