import React, { Component } from 'react';

export default class App extends Component {

   getInitialState() {
      return {
         loading: false,
         searchingText: '',
         gif: {}
      }
   };

   getGif(searchingText, callback) {
      const url = GIPHY_API_URL + 'v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = () => {
         if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText).data;
            const gif = {
               url: data.fixed_width_donwsampled_url,
               sourceUrl: data.url
            }
            callback(gif);
         };
      };
      xhr.send(); //why here?
   }

   handleSearch(searchingText) {
      this.setState({
         loading: true
      });
      this.getGif(searchingText, (gif) => {
         this.setState({
            loading: false,
            gif: gif,
            searchingText: searchingText
         })
      });
   };

   render() {
      const styles = {
         margin: '0 auto',
         textAlign: 'center',
         width: '90%'
      }  
      
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
   };
}