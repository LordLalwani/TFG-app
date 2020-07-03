const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
        allPrismicCasestudies {
            edges {
              node {
                uid
              }
            }
          }
    }
  `)

  const template = path.resolve("src/templates/caseStudyParser.jsx")

  pages.data.allPrismicCasestudies.edges.forEach(edge => {
    createPage({
      path: `/work/case-studies/${edge.node.uid}`,
      component: template,
      context: {
        targetUID: edge.node.uid,
      },
    })
  })
}