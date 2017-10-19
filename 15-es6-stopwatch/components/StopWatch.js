// import React, { Component } from 'react';

const pad0 = (value) => {
   const result = value.toString();
   return result.length < 2 ? `0${result}` : result;
};

class StopWatch {
   constructor(display) {
      this.running = false;
      this.display = display;
      this.reset();
      this.print(this.times);
      this.results = [];
      // this.resultslistNode = document.getElementsByClassName('results')[0];
      [this.resultslistNode, ...others] = document.getElementsByClassName('results');
   }

   reset() {
      this.times = {
         minutes: 0,
         seconds: 0,
         miliseconds: 0
      };
      this.stop();
      this.print();
   }

   print() {
      this.display.innerText = this.format(this.times);
   }

   // WHY NOT this.times directly? Not static?
   static format(times) {
      return `${times.minutes}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
   }

   start() {
      if (!this.running) {
         this.running = true;
         this.watch = setInterval(() => this.step(), 10);
      }
   }

   step() {
      if (this.running) {
         this.calculate();
         this.print();
      }
   }

   calculate() {
      this.times.miliseconds += 1;
      if (this.times.miliseconds > 99) {
         this.times.seconds += 1;
         this.times.miliseconds = 0;
      }
      if (this.times.seconds > 59) {
         this.times.minutes += 1;
         this.times.seconds = 0;
      }
   }

   stop() {
      this.running = false;
      clearInterval(this.watch);
   }

   addToResults() {
      const li = document.createElement('li');
      li.innerText = this.format(this.times);
      this.resultslistNode.appendChild(li);
      this.results.push(this.format(this.times));
   }
}

const stopwatch = new StopWatch(document.querySelector('.stopwatch'));

const startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => stopwatch.reset());

const addButton = document.getElementById('add');
addButton.addEventListener('click', () => stopwatch.addToResults());

// export default class StopWatch extends Component {
//    render() {
//       return (
//          <div
//             className="stopwatch"
//          >
//          </div>
//       )
//    }
// }
