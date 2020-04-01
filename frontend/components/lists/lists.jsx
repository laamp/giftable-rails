import React from 'react';

class Lists extends React.Component {
  componentDidMount() {
    this.props.getAllLists(this.props.currentUserId);
  }

  render() {
    return (
      <>
        <h1>Lists Component</h1>
        <p>{this.props.currentUserId}</p>
      </>
    );
  }
}

export default Lists;
