import React, { Component } from 'react';

class Filter extends Component {
  onFilterChange = (e) => {
    this.props.setFilter(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        onChange={this.onFilterChange}
        value={this.props.filterValue}
      />
    );
  }
}

export default React.memo(Filter);
