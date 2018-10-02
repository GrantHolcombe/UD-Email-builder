import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <label>Shipping details:
        <input type="text" onChange={this.props.onChange} name="header_data" placeholder="Enter the shipping parameter" />
      </label>
    );
  }
}

export default Header;
