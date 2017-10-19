import React, { Component } from 'react';

String.prototype.capitalize = function () {
   return this.slice(0, 1).toUpperCase() + this.slice(1, this.length);
};


const Anchors = (props) => {
   const labels = ['start', 'stop', 'reset', 'add'];

   return labels
      .map(item => ({
         key: labels.indexOf(item),
         text: item
      }))
      .map(({ key, text }) => {
         return (
            <a
               id={text}
               key={key}
               href="#"
               className="button"
            >{text.capitalize()}
            </a>
         );
      });
};

const Nav = (props) => {

   return (
      <nav>
         <Anchors />
      </nav>
   );
};

export default Nav;
