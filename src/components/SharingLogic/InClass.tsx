import React, { Component, FormEvent } from 'react';
import { validation } from './validation';

class Registration extends Component<{}, State> {
  state = { name: '', email: '', emailValid: undefined };

  onChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });

    if (name === 'email') {
      const emailValid = validation.email(value);
      this.setState({ emailValid });
    }
  };

  onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  render() {
    const { name, email } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input type="string" name="name" onChange={this.onChange} value={name} />
        <input name="email" onChange={this.onChange} value={email} />
      </form>
    );
  }
}

interface State {
  name: string;
  email: string;
  emailValid: undefined | boolean;
}

export default Registration;
