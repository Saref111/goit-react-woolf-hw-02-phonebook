import React, { Component } from 'react';

class Contacts extends Component {
  render() {
    
    console.log('Contacts render');
    return (
      <ul>
        {this.props.contacts.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    );
  }
}

export default React.memo(Contacts);
