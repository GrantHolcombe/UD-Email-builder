import React, { Component } from 'react';
import { Markup } from 'interweave';

class Template extends Component {
  render() {
    const html = '<p>render this as text</p>'
    return (
      <p>{html}</p>
    );
  }
}

export default Template;
