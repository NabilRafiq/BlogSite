import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"




const BlogPost = props => {
    const options = {
        renderMark: {
          [MARKS.BOLD]: text => <Bold>{text}</Bold>,
        },
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
          [BLOCKS.EMBEDDED_ASSET]: node => {
            return (
              <>
                <h2>Embedded Asset</h2>
                <pre>
                  <code>{JSON.stringify(node, null, 2)}</code>
                </pre>
              </>
            )
          },
        },
      }
      
      function BlogPostTemplate({ data, pageContext }) {
        const { bodyRichText } = data.contentfulBlogPost
      
        return <div>{bodyRichText && renderRichText(richTextField, options)}</div>
      }
    }

export default BlogPost