import React from "react";
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import global from './index.scss';

class App extends React.Component {
  state = {
    lat: null,
    errMsg: ''
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {this.setState({ lat: position.coords.latitude })},
      err => {this.setState({ errMsg: err.message })}
    )
  }

  componentDidUpdate() {
    console.log('Cmp is updated');
  }

  render() {
    if(!this.state.lat && !this.state.errMsg) {
      return (
        <div>Please give power to the browser to determine your location</div>
      )
    }
    if(!this.state.errMsg && this.state.lat) {
      return (
        <>
          <SeasonDisplay lat={this.state.lat}/>
        </>
      );
    }
    if(!this.state.lat && this.state.errMsg) {
      return (
        <div>
          Error: {this.state.errMsg}
        </div>
      );
    }
  }
}

ReactDom.render(<App />, document.querySelector('#root'));