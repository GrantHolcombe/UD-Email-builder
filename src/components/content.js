import React, { Component } from 'react';

class Content extends Component {

  render() {

    const data = this.props.contentData
    console.log(data);
    return (
<div>
      {data.map(function(item, i){
      <div className="content-block">
        <label>Img Src:
          <input type="text" name="header_data" placeholder="Enter the shipping paramater" />
        </label>
      </div>
    })}
</div>

    );
  }
}

export default Content;
