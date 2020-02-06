import React from "react";
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
  if(!song) {
    return <div>Select a song</div>;
  }
  return(
    <div>
      <div>{song.title}</div>
      <br/>
      <div>{song.duration}</div>
    </div>
  );
};

// fetch state from redux store and bind it to cmp props
const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);