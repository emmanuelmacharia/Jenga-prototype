import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  showSideNav = false;


  @HostListener('window:resize', ['$event'])
  windowResize(event) {
    event.target.innerWidth >= 768 ? this.showSideNav = true : this.showSideNav = false;
    console.log(this.showSideNav);
  }

  constructor() { }

  ngOnInit() {
  }


  toggleSideNav() {
    this.showSideNav ? this.showSideNav = false : this.showSideNav = true;
  }
}
