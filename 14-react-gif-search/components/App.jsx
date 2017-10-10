import React, { Component } from 'react';

import Search from './Search';
import Gif from './Gif';

const GIPHY_API_URL = 'https://api.giphy.com/v1/';
const GIPHY_PUB_KEY = 'MFElv6T1lSwzWh5LNM8XAofomIWKMKKJ';


class App extends Component {
   // getInitialState() {
   //    return {
   //       loading: false,
   //       searchingText: '',
   //       gif: {}
   //    }
   // };

   static getGif(searchingText, callback) {
      const url = `${GIPHY_API_URL}/gifs/random?api_key=${GIPHY_PUB_KEY}&tag=${searchingText}`;
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = () => {
         if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText).data;
            const gif = {
               url: data.fixed_width_donwsampled_url,
               sourceUrl: data.url
            };
            callback(gif);
         }
      };
      xhr.send(); // why here?
   }

   handleSearch(searchingText) {
      this.setState({
         loading: true
      });
      this.getGif(searchingText, (gif) => {
         this.setState({
            loading: false,
            // gif: gif,
            gif,
            // searchingText: searchingText
            searchingText
         });
      });
   }

   render() {
      const styles = {
         margin: '0 auto',
         textAlign: 'center',
         width: '90%'
      };

      return (
         <div style={styles}>
            <h1>Wyszukiwarka GIFów!</h1>
            <p>Znajdź gifa na <a href="http://giphy.com">giphy</a>. Naciskaj, aby pobrać kolejne gify.</p>
            <Search
               onSearch={this.handleSearch}
            />
            <Gif
               loading={this.state.loading}
               url={this.state.gif.url}
               sourceUrl={this.state.gif.sourceUrl}
            />
         </div>
      );
   }
}

App.state = {
   loading: false,
   searchingText: '',
   gif: {}
};

export default App;
