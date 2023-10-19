import { LightningElement } from 'lwc';

// Import HTML Files
import tempOne from './tempOne.html';
import tempTwo from './tempTwo.html';

export default class MiscMultipleTemplate extends LightningElement {

    tempOne = true;
    // When Component Loads on UI Function render() Excutes Automatic
    render(){
        return this.tempOne ? tempOne : tempTwo;
    }

    // Switch
    switchTemp(){
        // If temp one = true then it will be false 
        this.tempOne = this.tempOne === true ? false : true ;
    }

}