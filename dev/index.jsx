import React from "react";
import ReactDOM from "react-dom";
import App from './src/app.jsx';
// var HelloWorld = React.createClass({
//   render: function() {
//     return (
//       <p>Hello, {this.props.greetTarget}!</p>
//     );
//   }
// });

ReactDOM.render(
  <App />,
  document.querySelector("#container")
);
