import React, { Component } from 'react';

import css from './Contacts.module.scss';

class Contacts extends Component {
  filterValues = (contact) => {
    return (
      contact.name.includes(this.props.filterValue) ||
      contact.phone.includes(this.props.filterValue)
    );
  };

  render() {
    return (
      <>
        {this.props.children}
        <ul className={css.list}>
          {this.props.contacts.filter(this.filterValues).map((contact) => (
            <li key={contact.id} className={css.item}>
              <span className={css.name}>
                {contact.name}: {contact.phone}
              </span>
              <button
                type="button"
                onClick={() => this.props.deleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default React.memo(Contacts);
