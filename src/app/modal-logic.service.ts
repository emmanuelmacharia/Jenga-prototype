import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ModalClick {
  click = false;
}

@Injectable()
export class ModalLogicService {

  private click = new ModalClick();

  clicked = new BehaviorSubject<ModalClick>(this.click);

  changeDisplay(click: ModalClick) {
    this.clicked ? this.showModal() : this.hideModal();
  }

  showModal() { }
  hideModal() { }

  constructor() { }
}
