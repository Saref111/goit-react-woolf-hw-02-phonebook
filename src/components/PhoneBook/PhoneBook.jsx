import React, { Component } from 'react';

import css from './PhoneBook.module.scss';

class PhoneBook extends Component {
  state = {
    name: '',
    phone: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(e);
    this.setState({
      name: '',
      phone: '',
    });
  };

  onChangeName = (e) => {
    this.setState((pS) => ({
      ...pS,
      name: e.target.value,
    }));
  };

  onChangePhone = (e) => {
    this.setState((pS) => ({
      ...pS,
      phone: e.target.value,
    }));
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className={css.form}> 
        <label className={css.label}>Enter name:{' '}
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onChangeName}
            value={this.state.name}
          />
        </label>
        <label className={css.label}>Enter phone number:{' '}
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.onChangePhone}
            value={this.state.phone}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default PhoneBook;
