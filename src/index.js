import React from "react";
import ReactDom from 'react-dom';
import './index.scss';
import SearchBar from "./Components/SearchBar";
import youtube, {baseParams} from "./API/youtube";
import VideoList from "./Components/VideoList";
import VideoDetail from "./Components/VideoDetail";

class App extends React.Component {
  state = {
      videos: [],
      selectedVideo: null
  };

  componentDidMount() {
    this.onTermSubmit('flowers');
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        ...baseParams,
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = (video) => {
      this.setState({selectedVideo: video})
  };

  render() {
    return(
      <div className={'ui container'}
           style={{marginTop: '10px'}}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className={'ui grid'}>
          <div className={'ui row'}>
            <div className={'eleven wide column'}>
              <VideoDetail  video={this.state.selectedVideo}/>
            </div>
            <div className={'five wide column'}>
              <VideoList  videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDom.render(<App />, document.querySelector('#root'));