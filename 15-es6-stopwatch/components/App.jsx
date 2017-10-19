import React, { Component } from 'react';

import Nav from './Nav';
import StopWatch from './StopWatch';
import List from './List';

const defaultProps = {
   display: document.querySelector('.stopwatch'),
   list: document.querySelector('.results')
};

export default class App extends Component {
   render() {
      return (
         <div
            className="wrapper"
         >
            <Nav />
            {/* <StopWatch /> */}
            <List />
         </div>
      );
   }
}
