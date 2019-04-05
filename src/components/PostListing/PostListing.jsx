import React, { Component } from 'react';

import styles from './PostListing.module.scss';

export default class PostListing extends Component {
  render() {
    const { nodes } = this.props;

    console.log(styles);

    const listing = nodes.map(node => {
      const { title, id } = node;
      const url = node.featured_media ? node.featured_media.source_url : '';

      return (
        <li key={id} className={styles.PostListing}>
          <img src={url} className={styles.PostListingThumbnail} />
          <span
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
        </li>
      );
    });

    return <ul>{listing}</ul>;
  }
}
