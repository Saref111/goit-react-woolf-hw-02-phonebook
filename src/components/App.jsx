import React, { Component } from 'react';
import { getUniqueId } from 'helpers/helpers';

import PhoneBook from './PhoneBook/PhoneBook';
import Contacts from './Contacts/Contacts';

class App extends Component {
  state = {
    phones: [],
    name: '',
  };

  addContact = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        phones: [
          ...prevState.phones,
          {
            name: e.target.elements.name.value,
            id: getUniqueId(),
          },
        ],
        name: '',
      };
    });
  };

  setName = (name) => {
    this.setState(() => ({
      name,
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
          value={this.state.name}
        />
        <Contacts contacts={this.state.phones} />
      </div>
    );
  }
}

export default App;
