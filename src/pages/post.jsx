import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

class Post extends Component {
  render() {
    const { title, content } = this.props.data.wordpressPost;

    return (
      <Layout>
        <SEO title="FILL_IN" keywords={[`gatsby`, `application`, `react`]} />
        <h1>{title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </Layout>
    );
  }
}

export default Post;

export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      content
    }
  }
`;
