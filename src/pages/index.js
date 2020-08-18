import React from "react"
import { Link } from "gatsby"
import GatsbyImage from '../images/home-page_hero-collage.png';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="content">
      <div className="left-content">
        <h1 className="catch">Reactユーザーのためのモダンフレームワーク</h1>
        <p className="lead">Gatsbyは、ウェブサイトやアプリを作成するためのReactベースのオープンソースフレームワークです。 2000を超えるプラグインと、デフォルトで組み込まれているパフォーマンス、スケーラビリティ、およびセキュリティを使用して、想像できるあらゆるものを構築します。</p>
        <Link to="/start/" className="link">Quick Start　→</Link>
      </div>
      <div className="right-content">
        <img src={GatsbyImage} alt="" />
      </div>
    </div>
  </Layout>
)

export default IndexPage
