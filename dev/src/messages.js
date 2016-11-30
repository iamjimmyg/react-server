import React, { Component } from 'react';


export default class Messages extends Component {
  renderMessages (messages) {
    const name = messages.name;
    const message = messages.message;
    return (
      <li key={message}>{name + ": " + message}</li>
    );
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.messages.map(this.renderMessages)}
        </ul>
      </div>
    );
  }
}
