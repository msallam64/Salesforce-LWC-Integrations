import { LightningElement, api } from 'lwc';

export default class First extends LightningElement {
    name = 'Mohamed';
    company = 'Marakez';
    salary = '500';

    // Create lwc properties - add api first.
    @api message // Private Property - example hold record ID
    x;           // Public Property - Inside LWC Only  

    @api total = 30;

    get totalValue(){
        return this.total;
    }
}