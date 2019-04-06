import React, { Component } from 'react';

import styles from './PostListing.module.scss';

export default class PostListing extends Component {
  render() {
    const { nodes } = this.props;

    console.log(styles);

    const listing = nodes.map(node => {
      const { title, id, slug } = node;
      // const url = node.featured_media.localFile
      //   ? node.featured_media.localFile.relativePath
      //   : '';

      return (
        <li key={id} className={styles.PostListing}>
          {/* <img src={url} className={styles.PostListingThumbnail} /> */}
          <a
            href={slug}
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
