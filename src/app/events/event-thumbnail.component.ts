import { Component, Input} from "@angular/core";
import { IEvent } from ".";


@Component({
    selector: 'event-thumbanil',
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div>Time: {{event?.time}}</div>
        <div>Price: \${{event?.price}}</div>
        <div *ngFor="event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngFor="event?.onlineUrl">
            Online URL: {{event?.onlineUrl}}
        </div>
      
    </div>
    `,
    styles: [`
        .pad-left {margin-left: 10px}
       
    `]
})

export class EventThumbnailComponent{
  @Input() event:IEvent

  
  
}