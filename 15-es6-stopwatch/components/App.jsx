import React, { Component } from 'react';

import Nav from './Nav';
import StopWatch from './StopWatch';
import List from './List';

const defaultProps = {
   // display: document.querySelector('.stopwatch'),
   // list: document.querySelector('.results')
};

export default class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         runnig: false
      };
      this.reset();
      this.print();
   }

   reset = () => (
      this.state.times = {
         minutes: 0,
         seconds: 0,
         miliseconds: 0
      }
   )

   print = () => (
      this.props.display.innerText = this.format(this.times);
   )

   handleStartClick = () => {
      this.setState({
         test: 2
      });
   }

   render() {
      return (
         <div
            className="wrapper"
         >
            <Nav
               onStart={this.handleStartClick}
               onStop={() => console.log('stopped')}
               onReset={() => console.log('reset')}
               onSubmit={() => console.log('submitted')}
            />
            {/* <StopWatch 

            /> */}
            <List />
         </div>
      );
   }
}
