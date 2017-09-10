import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  
  @Output() startGame = new EventEmitter<{value: number}>();
  @Output() stopGame = new EventEmitter<{}>();
  
  i: number = 0;
  t: any;

  constructor() { }

  ngOnInit() {
  }
  
  onStartGame() {
    var ii = 0;
    var sg = this.startGame;
    // this.t = setInterval(function() {
    //   ii = ii + 1;
    //   console.log(ii);

    //   sg.emit({
    //     value: ii
    //   });
    //   }, 1000);

    this.t = setInterval(() => {
      this.i = this.i + 1;
      console.log(this.i);

      this.startGame.emit({
        value: this.i
      });
      }, 1000);
  }

  onStopGame() {
    clearInterval(this.t);
    this.stopGame.emit({
    });
  }
}
