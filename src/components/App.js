import React from "react";
import unsplash from './../api/unsplash';
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    listOfImages: []
  };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    this.setState({ listOfImages: response.data.results });
  };

  render() {
    return (
      <div className={'ui container'} style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found : {this.state.listOfImages.length}
      </div>
    )
  }
}

export default App;