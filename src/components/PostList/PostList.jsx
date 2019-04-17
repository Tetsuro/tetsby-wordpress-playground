import React, { Component } from 'react';

import styles from './PostList.module.scss';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

export default class PostList extends Component {
  render() {
    const { nodes } = this.props;

    const listing = nodes.map(node => {
      const { title, id, slug } = node;

      const localFile = node.featured_media
        ? node.featured_media.localFile
        : null;

      const fixed = localFile ? localFile.childImageSharp.fixed : null;

      const featuredImageMarkup = fixed ? (
        <Img fixed={fixed} className={styles.PostListThumbnail} />
      ) : null;

      return (
        <li key={id} className={styles.PostList}>
          {featuredImageMarkup}
          <Link to={`/${slug}`}>
            <span
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />
          </Link>
        </li>
      );
    });

    return <ul>{listing}</ul>;
  }
}
