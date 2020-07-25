import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contest-timer',
  templateUrl: './contest-timer.component.html',
  styleUrls: ['./contest-timer.component.css']
})
export class ContestTimerComponent implements OnInit {
  timeLeft:number = 15;
  seconds;
  constructor() { }

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    this.seconds = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        console.log("done");
      }
    }, 1000)
  }


}
