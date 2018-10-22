import React, { Component } from 'react';
import html from './emailTemplate.json';

class Template extends Component {
  render() {

    console.log(this.props.data.content_data);
    // const contentBlocks = this.props.data.contentData.map((item, i) =>
    // <tr>
    //  <td width="100%" align="center" valign="top" class="photo">
    //   <div align="right" style="font-size: 0; line-height: 1;">
    //    <a href={item.content_link} target="_blank" style="text-decoration:none;font-size:14px;font-family:arial;">
    //     <img src="http://image.store.urbandecay.com/lib/fe8c13727c6d017d76/m/1/844890f2-e033-4cbf-a9e7-bab1f7ed3806.jpg" width="100%" alt="FIND YOUR VICE" border="0" style="display:block;color:#ffffff;" />
    //    </a>
    //   </div>
    //  </td>
    // </tr>
    // );

    return (
      <div>
        <p>{
          html.blockOne +
          this.props.data.header_data +
          html.blockTwo
        }</p>
      </div>
    );
  }
}

export default Template;
