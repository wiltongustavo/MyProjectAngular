import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  CreateEventComponent,
  EventRouteActivator,
  EventDetailsComponent,
  EventListResolver
  

} from './events/index'
@NgModule({

imports: [
BrowserModule,
RouterModule.forRoot(appRoutes) 
],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
      EventService,
      ToastrService,
      EventRouteActivator,
      EventListResolver,
      {
        provide: 'canDeactivateCreateEvent',
         useValue: checkDirtyState}
    ],
      
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
  return window.confirm('You have nnot saved this event, do you really want to cancel?')
  return true
}