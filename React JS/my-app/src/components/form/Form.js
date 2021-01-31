import React, { Component } from 'react';
import shortid from 'shortid';
import { validate } from 'indicative/validator';
import ErrorNotification from './ErrorNotification';

const style = {
  width: 240,
  height: 130,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: ' space-between',
};

const rules = {
  login: 'required|string',
  email: 'required|email',
  password: 'required|string|min:6',
};

const messages = {
  'login.required': 'Please choose a unique login for your account',
  'email.required': 'Enter a valid email address.',
  'email.email': 'Email is invalid',
  'password.required': 'Enter a valid password.',
  'password.min': 'Password must be at least 6 characters long',
};

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

export default class Form extends Component {
  state = {
    login: '',
    email: '',
    password: '',
    agreed: false,
    gender: null,
    age: '',
    error: null,
  };

  loginId = shortid.generate();

  emailId = shortid.generate();

  passwordlId = shortid.generate();

  handleChange = e => {
    const { name, value, type, checked } = e.target;

    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { login, email, password } = this.state;

    validate({ login, email, password }, rules, messages)
      .then(() => {
        this.props.onSubmit({ ...this.state });
        this.reset();
      })
      .catch(error => {
        const formattedError = {};

        error.forEach(err => {
          formattedError[err.field] = err.message;
        });

        this.setState({
          error: formattedError,
        });
      });
  };

  reset = () => {
    this.setState({
      login: '',
      email: '',
      password: '',
      agreed: false,
      gender: null,
      age: '',
    });
  };

  render() {
    const { login, email, password, agreed, gender, age, error } = this.state;

    return (
      <form style={style} onSubmit={this.handleSubmit}>
        <label htmlFor={this.loginId}>
          Login
          <input
            type="text"
            value={login}
            onChange={this.handleChange}
            id={this.loginId}
            name="login"
          />
          {error && <ErrorNotification label={error.login} />}
        </label>

        <label htmlFor={this.emailId}>
          Email
          <input
            type="email"
            value={email}
            onChange={this.handleChange}
            id={this.emailId}
            name="email"
          />
          {error && <ErrorNotification label={error.email} />}
        </label>

        <label htmlFor={this.passwordlId}>
          Password
          <input
            type="password"
            value={password}
            onChange={this.handleChange}
            id={this.passwordlId}
            name="password"
          />
          {error && <ErrorNotification label={error.password} />}
        </label>

        <label>
          Agree to terms
          <input
            type="checkbox"
            checked={agreed}
            onChange={this.handleChange}
            name="agreed"
          />
        </label>

        <section>
          <h2>Choose your gender</h2>
          <label>
            Male
            <input
              type="radio"
              checked={gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              checked={gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </section>

        <label>
          Choose your age
          <select
            name="age"
            value={age}
            onBlur={this.handleChange}
            onChange={this.handleChange}
          >
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>

        <button type="submit" disabled={!agreed}>
          Sign up
        </button>
      </form>
    );
  }
}
