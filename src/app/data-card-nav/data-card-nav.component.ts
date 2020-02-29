import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-data-card-nav',
  templateUrl: './data-card-nav.component.html',
  styleUrls: ['./data-card-nav.component.css']
})
export class DataCardNavComponent implements OnInit {

  constructor( private renderer: Renderer2) { }

  ngOnInit() {
  }

  showModal($event) {
    $event.preventDefault();
    console.log($event);
  }
}
