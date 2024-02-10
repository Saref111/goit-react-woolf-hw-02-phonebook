import React, { Component } from 'react';

class PhoneBook extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(e);
  }

  onChangeName = (e) => {
    this.props.setName(e.target.value);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.onChangeName}
          value={this.props.value}
        />
        <button type='submit'>Add contact</button>
      </form>
    );
  }
}

export default PhoneBook;
