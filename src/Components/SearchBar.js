import React from 'react';

class SearchBar extends React.Component{
  state = {
    term: ''
  };

  onInputChange = e => {
    this.setState({term: e.target.value});
  };

  onFormSubmit = e => {
      e.preventDefault();
      this.props.onFormSubmit(this.state.term)
  };

  render() {
    return(
      <div className={'ui segment search-bar'}>
        <form
          className={'ui form'}
          onSubmit={this.onFormSubmit}
        >
          <div className={'field'}>
            <label>Video Search</label>
            <input
              value={this.state.term}
              type="text"
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;