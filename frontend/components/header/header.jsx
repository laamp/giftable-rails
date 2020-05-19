import React from 'react';
import { Link } from 'react-router-dom';
import './header';

const Header = ({ currentUser, logOut }) => {
  const headerNav = () =>
    currentUser ? (
      <>
        <p>Logged in</p>
        <p onClick={logOut}>Log me out</p>
      </>
    ) : (
      <>
        <p>Not logged in</p>
        <Link to='/signup'>Sign up</Link>
        <Link to='/login'>Log in</Link>
      </>
    );

  return (
    <header>
      <h1>Welcome to Giftable</h1>
      {headerNav()}
    </header>
  );
};

export default Header;
