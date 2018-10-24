import React, { Component } from 'react';

class Content extends Component {

  render() {

    const data = this.props.contentData
    const contentBlocks = data.map((item, i) =>

      <div key={item.content_id} className="content-block">
          <h2>{item.content_id}</h2>
        <label>Img Src:
          <input onChange={(e) => {this.props.onChange(e, item.content_id)}} value={item.content_img_src} type="text" name={Object.keys(item)[1]} placeholder={Object.keys(item)[1]} />
        </label>
        <label>Link HREF:
          <input onChange={(e) => {this.props.onChange(e, item.content_id)}} value={item.content_link} type="text" name={Object.keys(item)[2]} placeholder={Object.keys(item)[2]} />
        </label>
        <label>Content UTM:
          <input onChange={(e) => {this.props.onChange(e, item.content_id)}} value={item.content_utm} type="text" name={Object.keys(item)[3]} placeholder={Object.keys(item)[3]} />
        </label>
        <label>Alt Text:
          <input onChange={(e) => {this.props.onChange(e, item.content_id)}} value={item.content_alt} type="text" name={Object.keys(item)[4]} placeholder={Object.keys(item)[4]} />
        </label>
        <button onClick={() => this.props.removeBlock(item.content_id)}>Remove Block</button>
      </div>
    )
    // console.log(contentBlocks);

    return (

<div className="content-section">
        {contentBlocks}
</div>

    );
  }
}

export default Content;
