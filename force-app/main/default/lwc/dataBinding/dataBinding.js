import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {

    message = 'MAS';

    // Function handleChange to apply changes
    handleChange(event){
        this.message = event.target.value;
    }
}