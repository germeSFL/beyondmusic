import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() openedSidebar = new EventEmitter<String>();

  constructor() {}

  ngOnInit() {}

  onOpenSidenav() {
    this.openedSidebar.emit('opened');
  }
}
