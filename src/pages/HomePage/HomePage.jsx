import React, { Component } from 'react';
import styles from './HomePage.module.css';

class HomePage extends Component {
  state = {};

  render () {
    return (
      <div className={styles.home}>
        <h1>Welcome to my Phonebook Application</h1>
      </div>
    );
  }
}

export default HomePage;
