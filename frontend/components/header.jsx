import React from 'react';

class Header extends React.Component {
  headerNav() {
    return this.props.currentUser ? (
      <>
        <p>Logged in</p>
        <p onClick={this.props.logOut}>Log me out</p>
      </>
    ) : (
      <p>Not logged in</p>
    );
  }

  render() {
    return (
      <header>
        <h1>Welcome to Giftable</h1>
        {this.headerNav()}
      </header>
    );
  }
}

export default Header;
