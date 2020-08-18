import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Start = () => (
  <Layout>
    <SEO title="Quick Start" />
    <h1 className="catch">Quick Start</h1>
    <div className="explanation">
      <p className="code">$ npm install -g gatsby-cli</p>
      <p className="code">$ gatsby new</p>
      <p className="code">$ cd [name]</p>
      <p className="code">$ gatsby develop</p>
      <p className="code">http://localhost:8000</p>
    </div>
    <Link to="/" className="link">←　home</Link>
  </Layout>
)

export default Start
