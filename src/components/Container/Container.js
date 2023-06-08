import React, { Component } from 'react';
import s from './Container.module.css';

class Container extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className={s.container}>
        <h2 className={s.title}>{title}</h2>
        {children}
      </div>
    );
  }
}

export default Container;
