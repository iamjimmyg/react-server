import React, { Component } from 'react';
import Body from './body.jsx';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Chat With Yourself!!!</h1>
        <ul role='nav'>
          <li><Link to="/students">All Messages</Link></li>
        </ul>
        <Body />
      </div>
    );
  }
}
