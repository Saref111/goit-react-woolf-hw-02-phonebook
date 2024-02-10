import React, { Component } from 'react';

class Contacts extends Component {
  filterValues = (contact) => {
    return (
      contact.name.includes(this.props.filterValue) ||
      contact.phone.includes(this.props.filterValue)
    );
  };

  render() {
    return (
      <ul>
        {this.props.contacts.filter(this.filterValues).map((contact) => (
          <li key={contact.id}>
            <span>{contact.name}: {contact.phone}</span>
            <button type='button' onClick={() => this.props.deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default React.memo(Contacts);
