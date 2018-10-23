import React, { Component } from 'react';
import head from './headTemplate.json';
// import head from './Template.json';

class Template extends Component {
  render() {

    const data = this.props.data.content_data
    const contentBlocks = data.map((item, i) =>
    '<tr>' +
     '<td width="100%" align="center" valign="top" class="photo">' +
      '<div align="right" style="font-size: 0; line-height: 1;">' +
       '<a href="' + item.content_link + item.content_utm + '" target="_blank" style="text-decoration:none;font-size:14px;font-family:arial;">' +
        '<img src="' + item.content_img_src + '" width="100%" alt="' + item.content_alt + '" border="0" style="display:block;color:#ffffff;"/>' +
       '</a>' +
      '</div>' +
     '</td>' +
    '</tr>'
    );

    console.log(contentBlocks);



    return (
      <div>
        <p>{
          head.blockOne +
          this.props.data.header_data +
          head.blockTwo +
          contentBlocks
        }</p>
      </div>
    );
  }
}

export default Template;
