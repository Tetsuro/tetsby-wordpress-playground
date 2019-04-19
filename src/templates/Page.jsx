import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

class Page extends Component {
  render() {
    const { title, content } = this.props.data.wordpressPage;

    return (
      <Layout>
        <SEO title={title} keywords={[`gatsby`, `application`, `react`]} />
        <h1
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </Layout>
    );
  }
}

export default Page;

export const query = graphql`
  query($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      title
      content
    }
  }
`;
