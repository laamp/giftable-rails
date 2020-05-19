import React from 'react';
import { withRouter } from 'react-router-dom';

class Lists extends React.Component {
  componentDidMount() {
    this.props.getAllLists(this.props.currentUserId);
  }

  render() {
    const { lists } = this.props;
    const listKeys = Object.keys(lists);

    return (
      <>
        <h1>Lists Component</h1>
        <ul>
          {listKeys &&
            listKeys.map((list, idx) => (
              <li key={`list-${idx}`}>{lists[list].title}</li>
            ))}
        </ul>
      </>
    );
  }
}

export default withRouter(Lists);
