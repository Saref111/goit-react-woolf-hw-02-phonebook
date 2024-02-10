import React, { Component } from 'react';

class PhoneBook extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(e);
  };

  onChangeName = (e) => {
    this.props.setName(e.target.value);
  };

  onChangePhone = (e) => {
    this.props.setPhone(e.target.value);
  };

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
          value={this.props.nameValue}
        />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.onChangePhone}
          value={this.props.phoneValue}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default PhoneBook;
