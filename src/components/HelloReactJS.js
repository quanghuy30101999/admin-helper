import React, { Component } from 'react';
import '../App.css';
class HelloReactJS extends Component {
  render() {
      return (
      <Show {...this.props}></Show>
      );
    }
}


class Show extends Component {
    render() {
        console.log(this);
        return (
        <h1>Hello {this.props.firstName}
              <br/>
        </h1>
        );
      }
  }

export default HelloReactJS;
