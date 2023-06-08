import React, { Component } from 'react';
import s from './Filter.module.css';

class Filter extends Component {
  render() {
    const { filter, filterChange } = this.props;
    return (
      <label>
        Find contacts by name:
        <input
          type="text"
          name="filter"
          className={s.input}
          onChange={filterChange}
          value={filter}
        />
      </label>
    );
  }
}

export default Filter;
