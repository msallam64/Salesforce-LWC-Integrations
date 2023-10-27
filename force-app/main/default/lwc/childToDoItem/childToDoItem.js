import { LightningElement, api } from 'lwc';

export default class ChildToDoItem extends LightningElement {
    @api itemName;
}