import { LightningElement, api } from 'lwc';

export default class PrivatePublicProperty extends LightningElement {

    
    // Private Property Can not use outside LWC
    message1 = 'Private Message';
    recordId1;

    
    // Public Property 
    message = 'Public Message';
    @api recordId;


}