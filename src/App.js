import React, { Component } from 'react';
import Header from './components/header.js';
import Content from './components/content.js';
import Footer from './components/footer.js';
import './App.css';

class App extends Component {
  constructor(props, context) {
  super(props, context);

  this.handleChange = this.handleChange.bind(this);

  this.state = {
    header_data: '',
    content_data: [
      {
        content_img_src: '',
        content_link: '',
        content_utm: '',
        content_alt: ''
      },
    ],
    footer_data: ''
  };
}

handleChange(event) {
  // get the name value of the changing form field
  const targetName = event.target.name
  // find the state value that matches the field name, and update it
  if(targetName === 'header_data'){
    this.setState({ header_data: event.target.value})
  }
}

  render() {
    return (
      <div className="wrapper">
        <Header onChange={this.handleChange} />
        <p>{this.state.header_data}</p>
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
