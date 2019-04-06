import React, { Component } from 'react';

import styles from './PostListing.module.scss';
import { Link } from 'gatsby';

export default class PostListing extends Component {
  render() {
    const { nodes } = this.props;

    const listing = nodes.map(node => {
      const { title, id, slug } = node;
      // const url = node.featured_media.localFile
      //   ? node.featured_media.localFile.relativePath
      //   : '';

      return (
        <li key={id} className={styles.PostListing}>
          {/* <img src={url} className={styles.PostListingThumbnail} /> */}
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
