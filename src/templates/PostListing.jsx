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
    const { currentPage, numberOfPages } = this.props.pageContext;
    // const defaultThumbnail = this.props.data.allImageSharp.edges[0].node.fixed;

    const nodes = edges.map(({ node }) => node);

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <PostList
          nodes={nodes}
          // defaultThumbnail={defaultThumbnail}
          currentPage={currentPage}
          numberOfPages={numberOfPages}
        />
      </Layout>
    );
  }
}

export const query = graphql`
  query PostsQuery($limit: Int!, $skip: Int!) {
    allWordpressPost(limit: $limit, skip: $skip) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`;

export default PostListing;
