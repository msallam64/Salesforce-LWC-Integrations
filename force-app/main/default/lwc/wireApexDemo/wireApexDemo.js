import { LightningElement, api, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class WireApexDemo extends LightningElement {

    // Get RecordId.
    @api recordId;

    // Init Wire to get records and store value in contacts after passing recordId.
    @wire(getContacts,{accId : '$recordId'})
    contacts;
    


}