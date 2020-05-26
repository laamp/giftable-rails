import React from 'react';

class NewList extends React.Component {
  state = {
    title: '',
    event_date: '',
  };

  update = (field) => (e) => this.setState({ [field]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();

    const list = Object.assign({}, this.state);
    this.props.createNewList(this.props.currentUserId, list);
  };

  renderErrors = () => {
    const { errors } = this.props;

    return (
      Boolean(errors.length) && (
        <ul>
          {errors.map((err, idx) => (
            <li key={`error-${idx}`}>{err}</li>
          ))}
        </ul>
      )
    );
  };

  render() {
    const { title, event_date } = this.state;

    return (
      <>
        <h1>Create New List</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              id='title'
              value={title}
              onChange={this.update('title')}
              placeholder='List title'
            />
          </div>
          <div>
            <label htmlFor='eventdate'>Event date</label>
            <input
              type='date'
              id='eventdate'
              value={event_date}
              onChange={this.update('event_date')}
            />
          </div>
          <div>
            <input type='submit' value='Create list' />
          </div>
        </form>
        {this.renderErrors()}
      </>
    );
  }
}

export default NewList;
