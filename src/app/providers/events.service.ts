import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private Sidebar = new Subject<any>();
  SidebarObservable$ = this.Sidebar.asObservable();

  changeSidebar(payload: any) {
    this.Sidebar.next(payload);
  }
}
