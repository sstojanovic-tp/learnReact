import React from "react";
import ReactDom from 'react-dom';
import './index.scss';
import SearchBar from "./Components/SearchBar";
import youtube, {baseParams} from "./API/youtube";
import VideoList from "./Components/VideoList";

class App extends React.Component {
  state = {
      videos: [],
      selectedVideo: null
  };

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        ...baseParams,
        q: term
      }
    });
    this.setState({videos: response.data.items});
  };

  onVideoSelect = (video) => {
      console.log('From  the app', video)
  };

  render() {
    return(
      <div
        className={'ui container'}
        style={{marginTop: '10px'}}
      >
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    )
  }
}

ReactDom.render(<App />, document.querySelector('#root'));