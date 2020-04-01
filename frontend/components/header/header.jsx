import React from 'react';
import { Link } from 'react-router-dom';
import './style';

class Header extends React.Component {
  headerNav() {
    return this.props.currentUser ? (
      <>
        <p>Logged in</p>
        <p onClick={this.props.logOut}>Log me out</p>
      </>
    ) : (
      <>
        <p>Not logged in</p>
        <Link to="/signup">Sign up</Link>
        <Link to="/login">Log in</Link>
      </>
    );
  }

  render() {
    const { currentUser } = this.props;

    return (
      <header>
        <h1>Welcome to Giftable</h1>
        {this.headerNav()}
      </header>
    );
  }
}

export default Header;
