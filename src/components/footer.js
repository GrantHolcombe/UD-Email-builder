import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="col-lg-12 form-group">
        <label style={{minWidth: '100%'}}>Disclaimer:
          <textarea className="form-control" rows="5" onChange={this.props.onChange} value={this.props.data} name="footer_data" placeholder="Enter any additional disclaimer information"></textarea>
        </label>
      </div>
    );
  }
}

export default Footer;
