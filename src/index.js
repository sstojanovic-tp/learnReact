import React from "react";
import ReactDom from 'react-dom';
import './index.scss';


class App extends React.Component {
  render() {
    return(
      <div>This is root</div>
    )
  }
}

ReactDom.render(<App />, document.querySelector('#root'));