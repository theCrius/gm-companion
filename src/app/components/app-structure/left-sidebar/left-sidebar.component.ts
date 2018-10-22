import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../../providers/events.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {

  sidebar: {
    isOpen: boolean
  }

  constructor(
    private events: EventsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sidebar = {
      isOpen: false
    };
    this.events.SidebarObservable$.subscribe(data => {
      if(data.toggleSidebar === true) {
        this.toggleSidebar();
      }
    });
  }

  toggleSidebar = () => {
    this.sidebar.isOpen = !this.sidebar.isOpen;
  }

  goTo = (location) => {
    this.router.navigateByUrl(`/${location}`);
    this.toggleSidebar();
  }

}
