import React from "react";
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import './index.scss';
import Loader from "./loaderCmp";

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

  renderContent() {
    if(!this.state.lat && !this.state.errMsg) {
      return (
        <Loader msg={"Please accept location request"}/>
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

  render() {
    return(
      <div className={'border red'} style={{height: '100%'}}>
        {this.renderContent()}
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('#root'));