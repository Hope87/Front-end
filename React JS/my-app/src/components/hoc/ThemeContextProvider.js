import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext();

export default class ThemeContextProvider extends Component {
  static Consumer = Consumer;

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    }));
  };

  state = {
    theme: 'light',
    toggleTheme: this.toggleTheme,
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
