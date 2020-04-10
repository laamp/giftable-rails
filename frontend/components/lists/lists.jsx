import React from 'react';
import { withRouter } from 'react-router-dom';

class Lists extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllLists(this.props.currentUserId);
    console.log(this.props.lists);
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps, this.props);
  }

  render() {
    const { lists } = this.props;
    window.lists = lists;

    return (
      <>
        <h1>Lists Component</h1>
        <ul>
          {this.props.lists &&
            this.props.lists.map((list, idx) => (
              <li key={`list-${idx}`}>{list.name}</li>
            ))}
        </ul>
      </>
    );
  }
}

export default withRouter(Lists);
