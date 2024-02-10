import { getUniqueId } from 'helpers/helpers';
import React, { Component } from 'react';

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
            name: e.target.elements.name,
            id: getUniqueId(),
          },
        ],
        name: '',
      };
    });
  };
  render() {
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
