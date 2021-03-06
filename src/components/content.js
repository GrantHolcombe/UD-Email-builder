import React, { Component } from 'react';

class Content extends Component {

  render() {

    const data = this.props.contentData
    const contentBlocks = data.map((item, i) =>


      <div key={item.content_id} className="content-block">
        <div className="row">
          <div className="col-6 text-center">
            <h4>Content Block: {item.content_id}</h4>
          </div>
          <div className="col-6 text-center">
            <button className="btn btn-danger" onClick={() => this.props.removeBlock(item.content_id)}>Remove Block</button>
          </div>
        </div>

        <div className="col-lg-8 offset-lg-2">
          <div className="form-group">
            <label style={{minWidth: '100%'}}>Img Src:
              <input className="form-control input-lg" onChange={(e) => {this.props.onChange(e, item.content_id)}} value={item.content_img_src} type="text" name="content_img_src" placeholder="content img src" />
            </label>
          </div>
          <div className="form-group">
            <label style={{minWidth: '100%'}}>Link HREF:
              <input className="form-control input-lg" onChange={(e) => {this.props.onChange(e, item.content_id)}} value={item.content_link} type="text" name="content_link" placeholder="content link" />
            </label>
          </div>
          <div className="form-group">
            <label style={{minWidth: '100%'}}>Content UTM:
              <input className="form-control input-lg" onChange={(e) => {this.props.onChange(e, item.content_id)}} value={item.content_utm} type="text" name="content_utm" placeholder="content UTM" />
            </label>
          </div>
          <div className="form-group">
            <label style={{minWidth: '100%'}}>Alt Text:
              <textarea rows="3" className="form-control input-lg" onChange={(e) => {this.props.onChange(e, item.content_id)}} value={item.content_alt} type="text" name="content_alt" placeholder="content alt text" />
            </label>
          </div>
        </div>

      </div>
    )
    // console.log(contentBlocks);

    return (

<div className="content-section"  style={{maxHeight: 450, wordBreak: 'break-word', overflow: 'hidden scroll'}}>
        {contentBlocks}
</div>

    );
  }
}

export default Content;
