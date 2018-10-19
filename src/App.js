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

blockChange(event, id) {
  // copy array from state
  let newArr = [...this.state.content_data]
  // copy specific object from array in state
  let change = Object.assign({}, this.state.content_data[id])
  // loop through coppied object and change updated property
  for(var property in change) {
    if(property === event.target.name)
    change[event.target.name] = event.target.value
  }
  // cut out the outdated object and inject the updated one from the copied array
  newArr.splice(id, 1, change);
  // rewrite the updated array to state
  this.setState({ content_data: newArr });
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
        <Footer onChange={this.handleChange} data={this.state.footer_data} />
      </div>
    );
  }
}

export default App;
