import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import styles from './PostList.module.scss';

export default class PostList extends Component {
  render() {
    const { nodes, defaultThumbnail, currentPage, numberOfPages } = this.props;

    const isFirst = currentPage === 1;
    const isLast = currentPage === numberOfPages;

    const prevPageUrl =
      currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`;

    const nextPageUrl = `/page/${currentPage + 1}`;

    const previousLinkMarkup = isFirst ? null : (
      <Link to={prevPageUrl} rel="prev">
        ← Previous Page
      </Link>
    );

    const nextLinkMarkup = isLast ? null : (
      <Link to={nextPageUrl} rel="next">
        Next Page →
      </Link>
    );

    const listing = nodes.map(node => {
      const { title, id, slug } = node;

      const localFile = node.featured_media
        ? node.featured_media.localFile
        : null;

      const fixed = localFile
        ? localFile.childImageSharp.fixed
        : defaultThumbnail;

      const featuredImageMarkup = (
        <Img fixed={fixed} className={styles.PostListThumbnail} />
      );

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

    return (
      <div>
        <ul>{listing}</ul>
        <div className={styles.Pagination}>
          {previousLinkMarkup}
          {nextLinkMarkup}
        </div>
      </div>
    );
  }
}
