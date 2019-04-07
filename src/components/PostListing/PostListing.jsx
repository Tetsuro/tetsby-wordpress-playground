import React, { Component } from 'react';

import styles from './PostListing.module.scss';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

console.log(Image);

export default class PostListing extends Component {
  render() {
    const { nodes } = this.props;

    const listing = nodes.map(node => {
      const { title, id, slug } = node;

      const { fixed } = node.featured_media.localFile
        ? node.featured_media.localFile.childImageSharp
        : null;

      return (
        <li key={id} className={styles.PostListing}>
          <Img fixed={fixed} className={styles.PostListingThumbnail} />
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
