import React, { Component } from 'react';
import { getUniqueId } from 'helpers/helpers';

import PhoneBook from './PhoneBook/PhoneBook';

class App extends Component {
  state = {
    phones: [],
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
      };
    });
  };
  render() {
    console.log(this.state.phones);
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <PhoneBook onSubmit={this.addContact} />
      </div>
    );
  }
}

export default App;
