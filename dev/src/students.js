import React, { Component }from 'react';
import axios from 'axios';
import { Link } from 'react-router';


export default class Student extends Component {
  constructor (props){
    super(props);

    this.state = {
      messages: [],
      name: ''
    }

    this.onNameChange= this.onNameChange.bind(this);
    this.onNameSubmit= this.onNameSubmit.bind(this);
  }

  //mounts before component is rendered
  componentWillMount() {
    //this reference is lost in here
    var that = this;
    axios.get('/messages')
      .then(function(res){
        that.setState({messages: res.data});
      })
      .catch(function(err){
        console.log(err);
      });


  }
  onNameChange(event) {
    this.setState({ name: event.target.value})
  }
  //submit name to delate user from db
  onNameSubmit() {
    var name = this.state.name;
    axios.post('/delete', { name: name })
      .then(function(res){
        console.log('deleted', res);
      })
      .catch(function (err){
        console.log(err);
      })
    this.setState({ name: '' });
    this.componentWillMount();
  }

  render() {
    console.log(this.state.messages);
    return (
      <div>
        <ul role='nav'>
          <li><Link to="/">Home</Link></li>
        </ul>

        <form>
          <input placeholder="name" value={this.state.name} onChange={this.onNameChange}/>
          <button type='submit' onClick={this.onNameSubmit}>Submit</button>
        </form>

        <div>
          {this.state.messages.map((message, index)=>{
            return <div key={index}>{message.name + ": "}{message.message}</div>
          })}
        </div>

      </div>
    );
  }
}
