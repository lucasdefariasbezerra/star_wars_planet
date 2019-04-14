import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    return (
      <Menu>
        <Menu.Item header>Place</Menu.Item>
        <Menu.Item
          name='register'
          active={activeItem === 'register'}
          onClick={this.handleItemClick}
        >
          Register a new point
        </Menu.Item>
      </Menu>
    );
  }
}