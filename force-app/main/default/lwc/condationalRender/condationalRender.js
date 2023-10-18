import { LightningElement } from 'lwc';

export default class CondationalRender extends LightningElement {

    areDetailsVisiable = false;

    handleChange(event){

        this.areDetailsVisiable = event.target.checked;

    }
}