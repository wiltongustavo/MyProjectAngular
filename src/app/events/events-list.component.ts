
import { Component, OnInit} from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { EventService } from './share/event.service';
import { ActivatedRoute } from '@angular/router'
import { IEvent } from '.';

declare let toastr

@Component({
    selector: 'events-list',
    template: `
    <div  >
        <h1>Upcoming Angular Events </h1>
        <hr>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbanil (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbanil>
            </div>
        </div>
    </div> 
    `
})

export class  EventsListComponent  implements OnInit{
  
  events:IEvent[]
    constructor( private eventService: EventService, private toastr: ToastrService, private route:ActivatedRoute){
      
    }
     ngOnInit(){
        
        this.events = this.route.snapshot.data['events'] 

     }

     handleThumbnailClick(eventName){
         toastr.success(eventName);
     }

}