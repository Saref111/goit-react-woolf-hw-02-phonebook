import React, { Component } from 'react';

class Contacts extends Component {
  onFilterChange = (e) => {
    this.props.setFilter(e.target.value);
  };

  filterValues = (contact) => {
    return (
      contact.name.includes(this.props.filterValue) ||
      contact.phone.includes(this.props.filterValue)
    );
  };

  render() {
    return (
      <>
        <input
          type="text"
          onChange={this.onFilterChange}
          value={this.props.filterValue}
        />
        <ul>
          {this.props.contacts.filter(this.filterValues).map((contact) => (
            <li key={contact.id}>
              {contact.name}: {contact.phone}
            </li>
          ))}
        </ul>
      </>
    );
  };
}

export default React.memo(Contacts);
