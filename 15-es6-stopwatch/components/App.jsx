import React, { Component } from 'react';

import Nav from './Nav';
// import StopWatch from './StopWatch';

export default class App extends Component {
   render() {
      return (
         <div
            className="wrapper"
         >
            <Nav />
            <div className="stopwatch" />
            {/* <StopWatch /> */}
            <ol className="results" />
         </div>
      );
   }
}
