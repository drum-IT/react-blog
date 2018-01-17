import React from 'react';
import '../style/post.css';

class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <div className="post-image-thumb">
          <img className="post-image" src={this.props.imgSrc} alt="burger" />
        </div>
        <div className="post-preview">
          <div className="post-date">{this.props.postDate}</div>
          <h1 className="post-title">{this.props.postTitle}</h1>
          <p className="post-text">{this.props.postText}</p>
        </div>
      </div>
    );
  }
}

export default Post;