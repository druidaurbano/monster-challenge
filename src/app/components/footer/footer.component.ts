import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  buttonList: Array<any> = [];
  @Output() changeStep = new EventEmitter<any>();

  constructor() {
    this.buttonList = [
      {
        id: 0,
        name: 'Rick and Morty',
        icon: 'rick-and-morty'
      },
      {
        id: 1,
        name: 'GPS',
        icon: 'pin-outline'
      },
      {
        id: 2,
        name: 'Notification',
        icon: 'notifications-outline'
      },
      {
        id: 3,
        name: 'Camera',
        icon: 'camera-outline'
      }
    ];
  }

  changeScreen(button: any) {
    console.log('button clicado', button);
    this.changeStep.emit(button.id);
  }
}
