import React, { Component } from 'react';
import Header from './components/header.js';
import Content from './components/content.js';
import Footer from './components/footer.js';
import Template from './components/emailTemplate.js';
import './App.css';

class App extends Component {
  constructor(props, context) {
  super(props, context);

  this.handleChange = this.handleChange.bind(this);
  this.blockChange = this.blockChange.bind(this);
  this.addContentBlock = this.addContentBlock.bind(this);
  this.removeContentBlock = this.removeContentBlock.bind(this);

  this.state = {
    header_data: '',
    content_data: [],
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
  // this sets up a generic empty content block
  const blankBlock = {
    content_id: this.state.content_data.length,
    content_img_src: '',
    content_link: '',
    content_utm: '',
    content_alt: ''
  }
  // duplicate and add our blank block to the copy via the ES6 spread operator
  const addBlock = [...this.state.content_data, blankBlock]
  // apply updated array to state
  this.setState({
    content_data: addBlock
  });
}
removeContentBlock(id) {
  // copy array for immutability
  const newArr = [...this.state.content_data]
  // splice finds the index of the desired content block and removes it from the arry copy
  newArr.splice(id, 1);
  // this crazy loop is because we need to re-assign ID's if we remove a content block that is not at the end
  newArr.forEach(function(e, i){
    e.content_id = i
  })
  // apply array copy to state
  this.setState({
    content_data: newArr
  });
}

  render() {
    return (
      <div className="wrapper">

        <Header onChange={this.handleChange} data={this.state.header_data}/>
        <p>{this.state.header_data}</p>

        <Content onChange={this.blockChange} removeBlock={this.removeContentBlock} contentData={this.state.content_data}/>

        <button onClick={this.addContentBlock}>Add Content Block</button>

        <Footer onChange={this.handleChange} data={this.state.footer_data} />

        <Template data={this.state} />
      </div>
    );
  }
}

export default App;
