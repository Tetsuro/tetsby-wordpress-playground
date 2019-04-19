import React, { Component } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

import styles from './PostFooterLinks.module.scss';

class PostFooterLinks extends Component {
  render() {
    const { newerPostSlug, olderPostSlug } = this.props;

    const newerPostLinkMarkup = newerPostSlug ? (
      <Link to={`/${newerPostSlug}`}>« Newer post</Link>
    ) : null;

    const olderPostLinkMarkup = olderPostSlug ? (
      <Link to={`/${olderPostSlug}`}>Older post »</Link>
    ) : null;

    return (
      <div className={styles.PostFooterLinks}>
        {newerPostLinkMarkup}
        {olderPostLinkMarkup}
      </div>
    );
  }
}

export default PostFooterLinks;
