import React, { Component } from 'react';

// class Search extends Component {
const Search = React.createClass({
   getInitialState() {
      console.log('Search init');
      return {
         searchingText: ''
      };
   },

   handleChange(e) {
      const searchingText = e.target.value;
      this.setState({
         // searchingText: searchingText
         searchingText
      });

      if (searchingText.length > 2) {
         this.props.onSearch(searchingText);
      }
   },

   handleKeyUp(e) {
      if (e.keyCode === 13) {
         this.props.onSearch(this.state.searchingText);
      }
   },

   render() {
      // const styles = {
      //    fontSize: '1.5em',
      //    width: '90%',
      //    maxWidth: '350px'
      // };

      return (
         <input
            type="text"
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
            placeholder="Tutaj wpisz wyszukiwaną frazę"
            /* style={styles} */
            value={this.state.searchingText}
         />
      );
   }
});

export default Search;
