import React, { Component } from 'react';
import { getUniqueId } from 'helpers/helpers';

import PhoneBook from './PhoneBook/PhoneBook';
import Contacts from './Contacts/Contacts';

class App extends Component {
  state = {
    phones: [],
    name: '',
    phone: '',
    filter: '',
  };

  addContact = (e) => {
    e.preventDefault();
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
        name: '',
        phone: '',
      };
    });
  };

  setName = (name) => {
    this.setState(() => ({
      name,
    }));
  };

  setPhone = (phone) => {
    this.setState(() => ({
      phone,
    }));
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
        <PhoneBook
          onSubmit={this.addContact}
          setName={this.setName}
          setPhone={this.setPhone}
          nameValue={this.state.name}
          phoneValue={this.state.phone}
        />
        <Contacts
          setFilter={this.setFilter}
          contacts={this.state.phones}
          filterValue={this.state.filter}
        />
      </div>
    );
  }
}

export default App;
