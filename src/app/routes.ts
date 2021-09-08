import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventsListComponent } from "./events/events-list.component";
import { Routes } from "@angular/router";
import { CreateEventComponent } from "./events/create-event.component";

export const  appRoutes:Routes = [
    { path: 'events', component: EventsListComponent},
    { path: 'events/:id', component: EventDetailsComponent},
    { path: 'events/new', component: CreateEventComponent},
    { path: '', redirectTo: '/events', pathMatch: 'full'}
    
   
]