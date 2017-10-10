import { Component } from 'react';

const GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';
const styles = {
   minHeight: '310px',
   margin: '0.5em'
}

export default class Gif extends Component {

   getUrl() {
      return this.props.sourceUrl || GIPHY_LOADING_URL;
   }

   render() {
      const url = this.props.loading ? GIPHY_LOADING_URL : this.props.url
      return (
         <div>
            <a
               href={this.getUrl()}
               style={styles}
               title='view this on giphy'
               target='new'
            >
               <img
                  id='gif'
                  src={url}
                  style={{
                     width: '100%',
                     maxWidth: '350px'
                  }}
                  alt="gif" />
            </a>
         </div>
      );
   }
}