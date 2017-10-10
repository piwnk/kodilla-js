import { Component } from 'react';

export default class Search extends Component {
   
   getIinitialState() {
      return {
         searchingText: ''
      }
   };
   
   handleChange(e) {
      const searchingText = e.target.value;
      this.setState({
         searchingText: searchingText
      })

      if (searchingText.length > 2) {
         this.props.onSearch(searchingText);
      }
   };

   handleKeyUp(e) {
      if (e.keyCode === 13) {
         this.props.onSearch(this.state.searchingText);
      }
   }

   render() {
      const styles = {
         fontSize: '1.5em',
         width: '90%',
         maxWidth: '350px'
      };

      return (
         <input 
            type="text"
            /* onChange={this.handleChange} */
            onChange={e => this.setState({ searchingText: e.target.value })}
            placeholder="Tutaj wpisz wyszukiwaną frazę"
            style={styles}
            value={this.state.searchTerm}
         />
      )
   };
};