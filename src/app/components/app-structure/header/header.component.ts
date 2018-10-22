import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../providers/events.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private events: EventsService
  ) { }

  ngOnInit() {
  }

  toggleSidebar = () => {
    this.events.changeSidebar({toggleSidebar: true});
  }

}
