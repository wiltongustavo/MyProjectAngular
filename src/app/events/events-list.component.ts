import { Component} from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events </h1>
        <hr>
        <event-thumbanil  [event]="event1" ></event-thumbanil>
        
    </div> 
    `
})

export class  EventsListComponent {

    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.599,
        imageUrl:'assets/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'São Paulo',
            country: 'Brasil'
        }
    }
    handleEventClicked(data){
        console.log('received', data)
    }
}