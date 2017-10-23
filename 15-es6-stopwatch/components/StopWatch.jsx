import React, { Component } from 'react';
import PropTypes from 'prop-types';

const pad0 = (value) => {
   const result = value.toString();
   return result.length < 2 ? `0${result}` : result;
};
export default class StopWatch extends Component {
   static propTypes = {
      display: PropTypes.element.isRequired,
      list: PropTypes.element.isRequired
   }

   // static defaultProps = {
   //    stopwatchElement: document.querySelector('.stopwatch'),
   //    resultListElement: document.getElementsByClassName('results')[0]
   // }

   constructor(props) {
      super(props);
      console.log(this.props);
      console.log(props);
   //    this.running = false;
   //    this.reset();
   //    this.print(this.times);
   // }

   // WHY NOT this.times directly? Not static?
   format = times => `${times.minutes}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;

   // reset() {
   //    this.times = {
   //       minutes: 0,
   //       seconds: 0,
   //       miliseconds: 0
   //    };
   //    this.stop();
   //    this.print();
   // }

   print() {
      console.log(this.props);
      this.props.display.innerText = this.format(this.times);
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

   submit() {
      const li = document.createElement('li');
      li.innerText = this.format(this.times);
      this.props.list.appendChild(li);
      this.results.push(this.format(this.times));
   }

   render() {
      return (
         <div
            className="stopwatch"
            display=""
         >{this.format(this.times)}
         </div>
      );
   }
}
