import { LightningElement, api } from 'lwc';

export default class Child extends LightningElement {
    upperCaseItemName = 'Default Value';

    // Getter - public property because used in another component
    @api 
    get itemName(){
        return this.upperCaseItemName;
    }

    // Setter - Receiving Value and set it to upperCaseItemName
    set itemName(value){
        this.upperCaseItemName = value.toUpperCase();
    }
}