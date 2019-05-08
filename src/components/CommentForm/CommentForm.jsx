import React, { Component } from 'react';
import styles from './CommentForm.scss';

const ACTION_BASE_URL = `${process.env.GATSBY_WP_PROTOCOL}://${
  process.env.GATSBY_WP_BASE_URL
}/wp-json/wp/v2/comments`;

class CommentForm extends Component {
  render() {
    const { postId } = this.props;

    return (
      <>
        <h1>Post a comment</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="hidden" id="postId" value={postId} />
          <div className={styles.formInputWrapper}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
          </div>
          <div className={styles.formInputWrapper}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </div>
          <div className={styles.formInputWrapper}>
            <label htmlFor="website">Website</label>
            <input id="website" type="text" />
          </div>
          <div className={styles.formInputWrapper}>
            <label htmlFor="comment">Comment</label>
            <textarea id="comment" />
          </div>
          <input type="submit" value="Post comment" />
        </form>
      </>
    );
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const [postId, name, email, website, comment] = evt.target.elements;
    const sendData = JSON.stringify({
      post: postId.value,
      author_name: name.value,
      author_url: website.value,
      author_email: email.value,
      content: comment.value,
    });

    fetch(ACTION_BASE_URL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: sendData,
    });
  }
}

export default CommentForm;
