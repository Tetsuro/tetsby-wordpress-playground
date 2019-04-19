const path = require(`path`);

exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === 'wordpress__POST') {
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allWordpressPost {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressPage {
        edges {
          node {
            title
            content
            slug
            wordpress_id
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allWordpressPost.edges;
    const postsPerPage = 5;
    const numberOfPages = Math.ceil(posts.length / postsPerPage);

    const pages = result.data.allWordpressPage.edges;

    pages.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/Page.jsx`),
        context: {
          slug: node.slug,
        },
      });
    });

    posts.forEach(({ node }, i) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/Post.jsx`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.slug,
          wordpressId: node.wordpress_id,
        },
      });

      createPage({
        path: i === 0 ? '/' : `/page/${i + 1}`,
        component: path.resolve('./src/templates/PostListing.jsx'),
        context: {
          currentPage: i + 1,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numberOfPages,
        },
      });
    });
  });
};
