import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';

export default class WireAdapterDemo extends LightningElement {

    // To Get Record Id for Account
    @api recordId;

    // @wire (Adapter,Constractors) --> 1- Way with same results using import referances
    @wire(getRecord, {recordId: '$recordId', fields: [NAME_FIELD,PHONE_FIELD]})
    record; // record property contain data & error

    // Getter to show name and phone
    get name(){

        // Ternary Operator ? --> (Condation) ? true : false
        return this.record.data ? getFieldValue(this.record.data , NAME_FIELD) : '';

        // Another return statment with same result
        // return this.data.fields.Name.value;
    } 

    get phone(){

        return this.record.data ? getFieldValue(this.record.data , PHONE_FIELD) : '';

    }

    // @wire (Adapter,Constractors) --> 2- nother Way with same results using objects strings referances
    @wire(getRecord, {recordId: '$recordId', fields: ['Account.AccountNumber']})
    record2; // record property contain data & error

    get numberOfAccount(){
        
        return this.record2.data ? getFieldValue(this.record2.data , 'Account.AccountNumber') : '';
    }



}