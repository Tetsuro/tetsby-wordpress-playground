import React, { Component } from 'react';

class CommentsList extends Component {
  render() {
    const { comments } = this.props;

    const commentList = comments.map(comment => {
      return (
        <div>
          <strong>{comment.author_name}</strong>
          <p>{comment.date}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: comment.content,
            }}
          />
        </div>
      );
    });

    const commentCountHeadingMarkup =
      comments.length > 0 ? <h2>{comments.length} Comments</h2> : null;
    return (
      <div>
        {commentCountHeadingMarkup}
        {commentList}
      </div>
    );
  }
}

export default CommentsList;
