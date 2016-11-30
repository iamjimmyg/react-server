import React, { Component } from 'react';
import axios from 'axios';
import Messages from './messages';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      message: '',
      messages: []
    }
    this.onNameChange= this.onNameChange.bind(this);
    this.onMessageChange= this.onMessageChange.bind(this);
    this.onSubmitMessage= this.onSubmitMessage.bind(this);
  }


  onSubmitMessage (event) {
    event.preventDefault();
    var name = this.state.name;
    var message = this.state.message;
    axios.post('/message', {
      name: name,
      message: message
    });
    //add message/name to state
    var newMessages = this.state.messages.slice();
    newMessages.push({name: name, message: message});
    this.setState({messages: newMessages});
    //clear inputs
    this.setState({name: '', message: ''});

  }

  onNameChange(event) {
    this.setState({ name: event.target.value})
  }
  onMessageChange(event) {
    this.setState({ message: event.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitMessage} >
          <input placeholder="name" value={this.state.name} onChange={this.onNameChange}/>
          <input placeholder="message" value={this.state.message} onChange={this.onMessageChange}/>
          <button type='submit'>Submit</button>
        </form>

        <Messages messages={this.state.messages}/>
      </div>
    );
  }
}
