import { LightningElement, api } from 'lwc';

export default class Child extends LightningElement {
    upperCaseItemName = 'Default Text';

    // Getter - public property because used in another component
    @api 
    get itemName(){
        return this.upperCaseItemName;
    }

    // Setter - Receiving Value and set it to upperCaseItemName
    set itemName(value){
        this.upperCaseItemName = value.toUpperCase();
    }

    // Pass Value To Parent - Private Property Not Include @api Can not Pass Its Value From Parent
    // if Make it Public Can Pass Value To It From Parent
    @api
    txtValue = 'Value';

}