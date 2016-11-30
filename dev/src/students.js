import React, { Component }from 'react';
import axios from 'axios';
import { Link } from 'react-router';


export default class Student extends Component {
  constructor (props){
    super(props);

    this.state = {
      messages: []
    }
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

  render() {
    console.log(this.state.messages);
    return (
      <div>
        <ul role='nav'>
          <li><Link to="/">Home</Link></li>
        </ul>
        <div>
          {this.state.messages.map((message, index)=>{
            return <div key={index}>{message.name + ": "}{message.message}</div>
          })}
        </div>

      </div>
    );
  }
}
