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
              <input className="form-control input-lg" onChange={(e) => {this.props.onChange(e, item.content_id)}} value={item.content_img_src} type="text" name={Object.keys(item)[1]} placeholder={Object.keys(item)[1]} />
            </label>
          </div>
          <div className="form-group">
            <label style={{minWidth: '100%'}}>Link HREF:
              <input className="form-control input-lg" onChange={(e) => {this.props.onChange(e, item.content_id)}} value={item.content_link} type="text" name={Object.keys(item)[2]} placeholder={Object.keys(item)[2]} />
            </label>
          </div>
          <div className="form-group">
            <label style={{minWidth: '100%'}}>Content UTM:
              <input className="form-control input-lg" onChange={(e) => {this.props.onChange(e, item.content_id)}} value={item.content_utm} type="text" name={Object.keys(item)[3]} placeholder={Object.keys(item)[3]} />
            </label>
          </div>
          <div className="form-group">
            <label style={{minWidth: '100%'}}>Alt Text:
              <input className="form-control input-lg" onChange={(e) => {this.props.onChange(e, item.content_id)}} value={item.content_alt} type="text" name={Object.keys(item)[4]} placeholder={Object.keys(item)[4]} />
            </label>
          </div>
        </div>

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
