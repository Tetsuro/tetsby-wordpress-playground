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
          }
        }
      }
    }
  `).then(result => {
    result.data.allWordpressPost.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/post.jsx`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.slug,
        },
      });
    });
  });
};
