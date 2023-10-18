import { LightningElement } from 'lwc';

export default class RenderingListForEach extends LightningElement {

    // Init contacts List
    contacts = [
        {
            id: 1,
            Name: 'MAS 1',
            Phone: '01111111'
        },
        {
            id: 2,
            Name: 'MAS 2',
            Phone: '022222222'
        },
        {
            id: 3,
            Name: 'MAS 3',
            Phone: '033333333333'
        },
    ];

}