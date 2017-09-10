import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumber: number;
  oddNumber: number;
  
  onGameStarted(startData: {value: number}) {
    console.log('From app.component: ' + startData.value);
    
    if (startData.value % 2 == 0)
      this.evenNumber = startData.value;
    else
      this.oddNumber = startData.value;
  }
  
  onGameStoped(stopData: {lastValue: number}) {
    console.log('From app.component: Game Stoped!');
  }
}
