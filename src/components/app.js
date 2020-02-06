import React from "react";
import HeaderName from './HeaderName';
import PostItem from './PostItem';
import PostList from './PostList';

const App = () => {
  return (
    <div className={'ui container'}>
      <PostList />
      <HeaderName />
      <PostItem />
    </div>
  )
};

export default App;