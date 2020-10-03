import React, { Component } from 'react';
import '../css/PrintableComponent.css';

class PrintableComponent extends Component {
  render () {
    return (
      <div>
        <p>This will be printed</p>
        <a href="https://github.com/mmarotti">Cool github profile</a>
      </div>
    )
  }
}

export default PrintableComponent;
