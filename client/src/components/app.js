import React from 'react';
import PostContainer from './post_container';
import '../style/app.css';

class App extends React.Component {
  render() {
    return (
      <div className="blog">
        <PostContainer />
      </div>
    );
  }
}

export default App;
