import React, { Component } from 'react';

class Contacts extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map((contact) => (
          <li key={contact.id}>{contact.name}: {contact.phone}</li>
        ))}
      </ul>
    );
  }
}

export default React.memo(Contacts);
