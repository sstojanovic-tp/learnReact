import { combineReducers } from "redux";

export const songsReducer = () => {
  return [
    {title: 'No Scrubs', duration: '4:05'},
    {title: 'All star', duration: '2:05'},
    {title: 'Radiohead', duration: '5:05'},
    {title: 'I want it all', duration: '1:05'}
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
