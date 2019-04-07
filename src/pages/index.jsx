import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import PostListing from '../components/PostListing';

class IndexPage extends Component {
  render() {
    const { edges } = this.props.data.allWordpressPost;
    const nodes = edges.map(({ node }) => node);

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <PostListing nodes={nodes} />
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    allWordpressPost(limit: 10) {
      edges {
        node {
          id
          title
          featured_media {
            localFile {
              childImageSharp {
                fixed(width: 200, height: 200) {
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

export default IndexPage;
