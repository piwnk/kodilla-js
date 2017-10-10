import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';

class Contacts extends Component {
   render() {
      const contacts = this.props.items.map((contact) => {
         return (
            <Contact
               item={contact}
               key={contact.id}
            />
         );
      });
      return (
         <ul className="contactsList">
            {contacts}
         </ul>
      );
   }
}

Contacts.propTypes = {
   items: PropTypes.array.isRequired
};

export default Contacts;
