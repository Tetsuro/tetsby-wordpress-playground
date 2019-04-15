import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import PostList from '../components/PostList';

class PostListing extends Component {
  render() {
    const { edges } = this.props.data.allWordpressPost;
    const nodes = edges.map(({ node }) => node);
    const { currentPage, numberOfPages } = this.props.pageContext;

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

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <PostList nodes={nodes} />
        {previousLinkMarkup}
        {nextLinkMarkup}
      </Layout>
    );
  }
}

export const query = graphql`
  query($limit: Int!, $skip: Int!) {
    allWordpressPost(limit: $limit, skip: $skip) {
      edges {
        node {
          id
          title
          slug
          featured_media {
            localFile {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
              relativePath
            }
          }
        }
      }
    }
  }
`;

export default PostListing;
