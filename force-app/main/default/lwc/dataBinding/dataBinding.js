import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {

    message = 'MAS';

    // Function handleChange to apply changes
    handleChange(event){
        this.message = event.target.value;
    }

    // For Fetch Data Using Getter Demo 
    firstName = '';
    lastName = '';

    // 1- Function to Handle changing
    fullNameHandleChange(event){

        // That Var for check which target name (fname OR lname)
        const field = event.target.name;

        // Check which one
        if(field == 'fname'){
            this.firstName = event.target.value;
        }else if (field == 'lname'){
            this.lastName = event.target.value;
        }
    }

    // 2- Using Get to update fullNameUpperCase in HTML
    // return value will automatically go to property in HTML file
    get fullNameUpperCase(){

        // Return First Name & last Name in uppercase
        return `${this.firstName} ${this.lastName}`.toUpperCase();
    }


    // 3- Using QuerySelector To Fetch Data
    txt = 'First Text';
    handleClick(event){
        // change value of txt - get element by Id from HTML file if you have more than one lighting-input
        this.txt = this.template.querySelector("lightning-input[data-my-id=in3]").value;
         
        
    }
}