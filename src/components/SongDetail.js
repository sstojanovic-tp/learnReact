import React, { Component } from "react";
import { connect } from 'react-redux';
import { selectedSong } from "../actions";

class SongDetail extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div
          key={song.title}
          className={'item'}
        >
          <div className={'right floated content'}>
            <button
              onClick={() => this.props.selectedSong(song)}
              className={'ui button primary'}>
               Selected
            </button>
          </div>
          <div className={'content'}>
            {song.title}
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className={'ui list'}>
        {this.renderList()}
      </div>
    )
  }
}

// fetch state from redux store and bind it to cmp props
const mapStateToProps = state => {
  return {
    songs: state.songs
  };
};

export default connect(mapStateToProps,{selectedSong})(SongDetail);