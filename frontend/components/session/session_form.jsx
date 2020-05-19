import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  update = field => e =>
    this.setState({
      [field]: e.currentTarget.value,
    });

  handleSubmit = e => {
    e.preventDefault();

    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  };

  renderErrors = errors =>
    Boolean(errors.length) && (
      <ul>
        {errors.map((err, idx) => (
          <li key={`error-${idx}`}>{err}</li>
        ))}
      </ul>
    );

  render() {
    const { formType, errors } = this.props;
    const { name, email, password } = this.state;

    const onSignUpForm = formType && formType === 'signup';

    return (
      <>
        <h1>{onSignUpForm ? 'Sign Up' : 'Log In'}</h1>

        <form onSubmit={this.handleSubmit}>
          {onSignUpForm && (
            <div>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={this.update('name')}
                placeholder='Your name'
              />
            </div>
          )}
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={this.update('email')}
              placeholder='Your email'
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={this.update('password')}
              placeholder='Create a password'
            />
          </div>
          <div>
            <input type='submit' value={onSignUpForm ? 'Sign up' : 'Log in'} />
          </div>
        </form>

        <Link to={onSignUpForm ? '/login' : '/signup'}>
          Switch to {onSignUpForm ? 'log in' : 'sign up'}
        </Link>
        {this.renderErrors(errors)}
      </>
    );
  }
}

export default withRouter(SessionForm);
