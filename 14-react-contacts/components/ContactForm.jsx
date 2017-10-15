import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
   render() {
      return (
         <form className="contactForm">
            <input
               type="text"
               placeholder="Imię"
               value={this.props.contact.firstName}
            />
            <input
               type="text"
               placeholder="Nazwisko"
               value={this.props.contact.lastName}
            />
            <input
               type="text"
               placeholder="email"
               value={this.props.contact.email}
            />
            <button type="submit">Dodaj kontakt</button>
         </form>
      );
   }
};

ContactForm.propTypes = {
   contact: PropTypes.object.isRequired
};

export default ContactForm;