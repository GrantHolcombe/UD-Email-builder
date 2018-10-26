import React, { Component } from 'react';
import head from './headTemplate.json';
import footer from './footerTemplate.json';

class liveVersion extends Component {
  render() {

    const data = this.props.data.content_data
    const contentBlocks = data.map((item, i) => {
      const linkArr = item.content_link.split('');
      let renderLink = ''
      if(linkArr.indexOf('#') !== -1){
        if(linkArr.indexOf('?') !== -1){
          linkArr.splice(linkArr.indexOf('#'), 0, "&" + item.content_utm);
          renderLink = linkArr.join('')
        }
        else{
          linkArr.splice(linkArr.indexOf('#'), 0, "?" + item.content_utm);
          renderLink = linkArr.join('')
        }
      }
      else if (linkArr.indexOf('?') !== -1) {
        linkArr.splice(linkArr.length, 0, "&" + item.content_utm);
        renderLink = linkArr.join('')
      }
      else {
        renderLink = item.content_link + '?' + item.content_utm
      }

        return (
        '<tr>' +
         '<td width="100%" align="center" valign="top" class="photo">' +
          '<div align="right" style="font-size: 0; line-height: 1;">' +
           '<a href="' + renderLink + '" target="_blank" style="text-decoration:none;font-size:14px;font-family:arial;">' +
            '<img src="' + item.content_img_src + '" width="100%" alt="' + item.content_alt + '" border="0" style="display:block;color:#ffffff;"/>' +
           '</a>' +
          '</div>' +
         '</td>' +
        '</tr>'
        )
      }
    );

    const previewHTML = head.blockOne + this.props.data.header_data + head.blockTwo + contentBlocks.join('') + footer.blockOne + this.props.data.footer_data + footer.blockTwo

    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: previewHTML }} />
      </div>
    );
  }
}

export default liveVersion;
