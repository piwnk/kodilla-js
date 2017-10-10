import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
   render() {
      return (
         <div className="contactItem">
            <div>
               <img
                  className="contactImage"
                  src="http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico"
                  alt="contact"
               />
            </div>
            <div>
               <p className="contactLabel">Imię: {this.props.item.firstName}</p>
               <p className="contactLabel">Nazwisko: {this.props.item.lastName}</p>
               <a
                  className="contactEmail"
                  href="mailto:{this.props.item.email}"
               >{this.props.item.email}</a>
            </div>
         </div>
      );
   }
};

Contact.propTypes = {
   item: PropTypes.object.isRequired
};

export default Contact;
