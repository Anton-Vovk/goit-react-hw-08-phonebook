import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import { getLogged } from '../../redux/auth/auth-selector';
import styles from './NavBar.module.css';

const NavBar = ({ isLogged }) => {
  return (
    <header className={styles.mainHeader}>
      <Navigation />
      {isLogged ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = state => ({
  isLogged: getLogged(state),
});

export default connect(mapStateToProps)(NavBar);
