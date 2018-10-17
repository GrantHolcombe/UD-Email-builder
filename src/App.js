import React, { Component } from 'react';
import update from 'immutability-helper';
import Header from './components/header.js';
import Content from './components/content.js';
import Footer from './components/footer.js';
import './App.css';

class App extends Component {
  constructor(props, context) {
  super(props, context);

  this.handleChange = this.handleChange.bind(this);
  this.blockChange = this.blockChange.bind(this);
  this.addContentBlock = this.addContentBlock.bind(this);

  this.state = {
    header_data: '',
    content_data: [
      {
        content_id: 0,
        content_img_src: '',
        content_link: '',
        content_utm: '',
        content_alt: ''
      },
    ],
    footer_data: ''
  };
}

handleChange(e) {
  let change = {}
  change[e.target.name] = e.target.value
  this.setState(change)
}

blockChange(e) {
  let change = {}
  // let newBlock = {
  //
  // }
  change[e.target.name] = e.target.value
  console.log(change);
}

addContentBlock() {
  const blankBlock = {
    content_id: this.state.content_data.length,
    content_img_src: '',
    content_link: '',
    content_utm: '',
    content_alt: ''
  }
  const addBlock = [...this.state.content_data, blankBlock]
  this.setState({
    content_data: addBlock
  });
}

  render() {
    return (
      <div className="wrapper">
        <Header onChange={this.handleChange} data={this.state.header_data}/>
        <p>{this.state.header_data}</p>
        <Content onChange={this.blockChange} contentData={this.state.content_data}/>
        <button onClick={this.addContentBlock}>Dont do it</button>
        <Footer />
      </div>
    );
  }
}

export default App;
