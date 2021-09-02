import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'event-thumbanil',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
        <span>Location: {{event.location.address}}</span>
        <span>&nbsp;</span>
        <span>{{event.location.city}}, {{event.location.country}}</span>
        </div>
      
    </div>
    `
})

export class EventThumbnailComponent{
  @Input() event:any
  
}