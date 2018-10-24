import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <label>Disclaimer:
        <textarea rows="5" onChange={this.props.onChange} value={this.props.data} name="footer_data" placeholder="Enter any additional disclaimer information"></textarea>
      </label>
    );
  }
}

export default Footer;
