import { Component, OnInit } from '@angular/core';
import { ModalLogicService } from '../modal-logic.service';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.css'],
})
export class DataCardComponent implements OnInit {

  constructor(private service: ModalLogicService) { }

  ngOnInit() {
    this.service.clicked.subscribe(value => console.log(`here's the service value returned ${value}`));
  }

}
