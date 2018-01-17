import React from 'react';
import Post from './post';
import '../style/post_container.css';
import POSTS from '../data/posts';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: POSTS
    }
  }
  renderPosts() {
    return this.state.posts.map(post => {
      return <Post key={post.postDate + post.postTitle} imgSrc={post.imgSrc} postDate={post.postDate} postTitle={post.postTitle} postText={post.postText} />;
    });
  }
  render() {
    return (
      <div className="post-container">
        {this.renderPosts()}
      </div>
    );
  }
}

export default PostContainer;