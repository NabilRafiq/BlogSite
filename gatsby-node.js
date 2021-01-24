const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
        allContentfulBlogPost {
            edges {
              node {
                bodyRichText {
                  raw
                  references {
                    ... on ContentfulAsset {
                      contentful_id
                      fixed(width: 1600) {
                        width
                        height
                        src
                        srcSet
                      }
                    }
                    ... on ContentfulBlogPost {
                      contentful_id
                      title
                      slug
                    }
                  }
                }
              }
            }
          }
    }
  `)
  response.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}