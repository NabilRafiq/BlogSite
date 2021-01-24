import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to our new Gatsby site.</p>
    <p>Development in progress. Stay patient.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/blog/">Go to BlogSite</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
