import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import CommentsList from '../components/CommentsList';
import PostFooterLinks from '../components/PostFooterLinks';

class Post extends Component {
  render() {
    const { title, content } = this.props.data.wordpressPost;
    const { edges } = this.props.data.allWordpressWpComments;
    const { newerPostSlug, olderPostSlug } = this.props.pageContext;

    const comments = edges.map(({ node }) => node);

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
        <CommentsList comments={comments} />
        <PostFooterLinks
          newerPostSlug={newerPostSlug}
          olderPostSlug={olderPostSlug}
        />
      </Layout>
    );
  }
}

export default Post;

export const query = graphql`
  query($slug: String!, $wordpressId: Int!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      content
      wordpress_id
    }
    allWordpressWpComments(filter: { post: { eq: $wordpressId } }) {
      edges {
        node {
          content
          author_name
          date(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`;
