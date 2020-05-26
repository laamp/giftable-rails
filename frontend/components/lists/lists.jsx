import React from 'react';
import { withRouter } from 'react-router-dom';

import NewListContainer from '../new_list/new_list_container';

class Lists extends React.Component {
  state = {
    showNewListForm: false,
  };

  componentDidMount() {
    this.props.getAllLists(this.props.currentUserId);
  }

  render() {
    const { lists } = this.props;
    const listKeys = Object.keys(lists);

    const newListForm = this.state.showNewListForm && <NewListContainer />;

    return (
      <>
        <h1>Lists Component</h1>
        <ul>
          {listKeys &&
            listKeys.map((list, idx) => (
              <li key={`list-${idx}`}>{lists[list].title}</li>
            ))}
        </ul>
        {this.asdf}
        <button onClick={() => this.setState({ showNewListForm: true })}>
          + Make a new list
        </button>
        {newListForm}
      </>
    );
  }
}

export default withRouter(Lists);
