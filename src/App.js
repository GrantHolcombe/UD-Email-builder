import React, { Component } from 'react';
import Axios from 'axios';
import Header from './components/header.js';
import Content from './components/content.js';
import Footer from './components/footer.js';
import Template from './components/emailTemplate.js';
import TextVersion from './components/emailTextVersion.js';
import LiveVersion from './components/emailLiveVersion.js';
import './App.css';

class App extends Component {
  constructor(props, context) {
  super(props, context);

  this.handleChange = this.handleChange.bind(this);
  this.blockChange = this.blockChange.bind(this);
  this.addContentBlock = this.addContentBlock.bind(this);
  this.removeContentBlock = this.removeContentBlock.bind(this);
  this.changeView = this.changeView.bind(this);
  this.saveBuild = this.saveBuild.bind(this);
  this.loadBuild = this.loadBuild.bind(this);


  this.state = {
    campaign_name: '',
    subject_data: '',
    preheader_data: '',
    header_data: '',
    content_data: [{
      content_id: 0,
      content_img_src: '',
      content_link: '',
      content_utm: '',
      content_alt: ''
    }],
    footer_data: '',
    previewViewIndex: 0
  };
}

saveBuild(){
  Axios.post('https://bt12aqzvfd.execute-api.us-west-1.amazonaws.com/Production/send-email-obj', this.state );
  console.log(this.state);
}

loadBuild(){
  const loadName = prompt("enter a Campaign Name");
  if(loadName != null) {
    const newState = Axios.post('https://bt12aqzvfd.execute-api.us-west-1.amazonaws.com/Production/return-email-obj', '"' + loadName + '"' )
      .then(response =>
        this.setState(response.data)
        // console.log(response.data)
      );
  }
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
  // convert UTM string to lowercase for use in URL
  let val = event.target.value.toLowerCase();
  // loop through coppied object and change updated property
  for(var property in change) {
    if(property === event.target.name)
    console.log(val);
    if(event.target.name === 'content_utm'){
      const replace = val.replace(' ', '_');
      change[event.target.name] = replace
    }
    else{
        change[event.target.name] = event.target.value
    }

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
  newArr.forEach(function(element, index){
    element.content_id = index
  })
  // apply array copy to state
  this.setState({
    content_data: newArr
  });
}

changeView(viewId) {
  this.setState({previewViewIndex: viewId});
}


  render() {
    let previewView
    switch (this.state.previewViewIndex) {
      case 0:
        previewView = <Template data={this.state} />
        break;
      case 1:
        previewView = <TextVersion data={this.state} />
        break;
      case 2:
        previewView = <LiveVersion data={this.state} />
        break;
      default:
      previewView = <Template data={this.state} />
    }

    return (
      <div className="container-fluid">

        <div className="row">
          <div className="col text-center py-3">
            <h1>Urban Decay Email Builder</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6" >

            <div className="form-group">
              <Header onChange={this.handleChange} data={this.state}/>
            </div>

            <Content onChange={this.blockChange} removeBlock={this.removeContentBlock} contentData={this.state.content_data}/>

            <div className="form-group">
              <Footer onChange={this.handleChange} data={this.state.footer_data} />
            </div>

            <div className="row">
              <div className="col-12">
                <button className="btn btn-success float-left" onClick={this.addContentBlock}>Add Content Block</button>
                <button className="btn btn-warning float-right" onClick={this.saveBuild}>Save Email Build</button>
                <button className="btn btn-primary float-right" onClick={this.loadBuild}>Load Email Build</button>
              </div>
            </div>

          </div>

          <div className="col-sm-6">
            <button onClick={() => this.changeView(0)}>HTML View</button>
            <button onClick={() => this.changeView(1)}>Text View</button>
            <button onClick={() => this.changeView(2)}>Live View</button>
            {previewView}

          </div>

        </div>

      </div>
    );
  }
}

export default App;
