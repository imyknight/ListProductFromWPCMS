/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const {createPage} = actions;
  const PageTemplate = path.resolve("./src/templates/Page.js")

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
    }
  `)

  if(result.error) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return
  }

  const Pages = result.data.allWordpressPage.edges;
  Pages.map(page => {
    createPage({
      path: `/${page.node.slug}`,
      component: PageTemplate,
      context: {
        id: page.node.wordpress_id
      },
    })
  })
}