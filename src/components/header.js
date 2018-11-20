import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-4 offset-lg-4 form-group">
            <label>Campaign Name:
              <input className="form-control" type="text" onChange={this.props.onChange} value={this.props.data.campaign_name} name="campaign_name" placeholder="Enter the Campaign Name" />
            </label>
          </div>
          <div className="col-lg-4 offset-lg-2 form-group">
            <label>Subject line:
              <input className="form-control" type="text" onChange={this.props.onChange} value={this.props.data.subject_data} name="subject_data" placeholder="Enter the Subject" />
            </label>
          </div>
          <div className="col-lg-4 offset-lg-2 form-group">
            <label>Preheader:
              <input className="form-control" type="text" onChange={this.props.onChange} value={this.props.data.preheader_data} name="preheader_data" placeholder="Enter the Preheader" />
            </label>
          </div>
          <div className="col-lg-4 offset-lg-4 form-group">
            <p style={{margin: 0}}>Shipping option:</p>
            <div className="radio">
              <label>
                <input name="header_data" onChange={this.props.onChange} type="radio" value="Free Shipping Over $50" checked={this.props.data.header_data === "Free Shipping Over $50"} />
                Free Shipping Over $50
              </label>
            </div>
            <div className="radio">
              <label>
                <input name="header_data" onChange={this.props.onChange} type="radio" value="Free Shipping" checked={this.props.data.header_data === "Free Shipping"} />
                Free Shipping
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
