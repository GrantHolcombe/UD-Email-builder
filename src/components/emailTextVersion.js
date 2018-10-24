import React, { Component } from 'react';
import head from './headTemplate.json';
import footer from './footerTemplate.json';

class TextVersion extends Component {
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

        return (
        <p>loop content blocks for text version</p>
        )
      }
    );

    return (
      <div>
        <p>preheader here {contentBlocks}</p>
      </div>
    );
  }
}

export default TextVersion;
