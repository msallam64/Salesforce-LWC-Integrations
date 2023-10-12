import { LightningElement, api, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import { getRecord } from 'lightning/uiRecordApi';

export default class WireApexDemo extends LightningElement {

    // Get RecordId.
    @api recordId;

    // Init Wire Property to get records and store value in contacts after passing recordId.
    @wire(getContacts,{accId : '$recordId'})
    contacts; // Thais has data and error

    @wire(getRecord, {recordId: '$recordId', fields: 'Account.Name'})
    record;

    get name(){
        return this.record.data.fields.Name.value;
    }

    contactsFromWireFun; // Var To Store data
    errorFromWireFun;
    // Init Wire Function to get records and store value in contacts after passing recordId.
    @wire(getContacts,{accId : '$recordId'})
    wiredContacts({error,data}){

        if(data){
            this.contactsFromWireFun = data;
            this.errorFromWireFun = undefined;
        }else if (error) {
            this.errorFromWireFun = error;
            this.contactsFromWireFun = undefined;
        }

    }



}