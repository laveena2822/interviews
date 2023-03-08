/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement, api } from "lwc";
import LightningModal from 'lightning/modal'; 
export default class AdjustQuotePrice extends LightningModal {
  @api recordId;
  adjustedAmountLabel = "Adjusted Amount";
  adjustedAmount = 0;
  handleOkay(){
    this.close('Okay');
  }
}
