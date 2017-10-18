import React, { Component } from 'react';

import Search from './Search';
import Gif from './Gif';

const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
let GIPHY_API_URL = 'https://api.giphy.com/v1/';
GIPHY_API_URL = corsAnywhere + GIPHY_API_URL;
const GIPHY_PUB_KEY = 'MFElv6T1lSwzWh5LNM8XAofomIWKMKKJ';
// const GIPHY_PUB_KEY = 'iITTsmgUVmFjRztsgvMsjtQlIV2HmWd6';


// HOW TO WRITE IT CORRECTLY?
const httpGet = (url) => {
   return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      // HOW TO WRITE IT CORRECTLY?
      request.onload = function () {
         if (this.status === 200) {
            const { data } = JSON.parse(request.responseText);
            const gif = {
               url: data.fixed_width_downsampled_url,
               sourceUrl: data.url
            };
            resolve(gif);
         } else {
            reject(new Error(`Not 200 Error: ${this.statusText}`));
         }
      };
      request.onerror = function () {
         reject(new Error(`XMLHttpRequest Error: ${this.statusText}`));
      };

      request.open('GET', url);
      request.send();
   });
};

// class App extends Component {
const App = React.createClass({
   getInitialState() {
      console.log('App init');
      return {
         loading: false,
         searchingText: '',
         gif: {}
      };
   },


   getGif(searchingText, callback) {
      const url = `${GIPHY_API_URL}/gifs/random?api_key=${GIPHY_PUB_KEY}&tag=${searchingText}`;
      // const xhr = new XMLHttpRequest();

      // xhr.open('GET', url);
      // xhr.onload = () => {
      //    if (xhr.status === 200) {
      //       // const data = JSON.parse(xhr.responseText).data;
      //       const data = JSON.parse(xhr.responseText).data;
      //       const gif = {
      //          url: data.fixed_width_downsampled_url,
      //          sourceUrl: data.url
      //       };
      //       callback(gif);
      //    }
      // };
      // xhr.send();

      httpGet(url)
         .then((response) => {
            console.log(response);
            return callback(response);
         })
         .catch(error => console.error('Something went wrong', error));
   },

   handleSearch(searchingText) {
      this.setState({
         loading: true
      });
      this.getGif(searchingText, (gif) => {
         // this.getGif(searchingText, function (gif) {
         this.setState({
            loading: false,
            // gif: gif,
            gif,
            // searchingText: searchingText
            searchingText
            // }.bind(this));
         });
      });
   },

   render() {
      // const styles = {
      //    margin: '0 auto',
      //    textAlign: 'center',
      //    width: '90%'
      // };
      return (
         <div
            /* style={styles} */
            className="wrp"
         >
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
});

export default App;
