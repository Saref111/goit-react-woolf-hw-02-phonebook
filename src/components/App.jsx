import React, { Component } from 'react';
import { getUniqueId } from 'helpers/helpers';

import PhoneBook from './PhoneBook/PhoneBook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    phones: [],
    filter: '',
  };

  isContactExist = (contact) => {
    return this.state.phones.some((it) => it.name === contact.name);
  };

  addContact = (e) => {
    e.preventDefault();

    if (this.isContactExist(e.target.elements.name.value)) {
      alert(`${e.target.elements.name.value} is already in contacts`);
      return;
    }

    this.setState((prevState) => {
      return {
        phones: [
          ...prevState.phones,
          {
            name: e.target.elements.name.value,
            phone: e.target.elements.number.value,
            id: getUniqueId(),
          },
        ],
      };
    });
  };

  deleteContact = (id) => {
    this.setState((prevState) => {
      return {
        phones: prevState.phones.filter((it) => it.id !== id),
      };
    });
  };

  setFilter = (filter) => {
    this.setState(() => ({
      filter,
    }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <PhoneBook onSubmit={this.addContact} />
        <Filter setFilter={this.setFilter} filterValue={this.state.filter} />
        <Contacts
          contacts={this.state.phones}
          filterValue={this.state.filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
