import { Component, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  calendarPlugins = [dayGridPlugin];

  jumpto(num) {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.prev();
  }

  jumpfrom(num) {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.next();
  }
}
