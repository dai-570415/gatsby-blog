import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

export const query = graphql `
  query {
    hero: file(relativePath: {eq: "hero.png"}) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <div className="inner-main">
          <div className="content">
            <div className="left-content">
              <h1 className="catch">Reactユーザーのためのモダンフレームワーク</h1>
              <p className="lead">Gatsbyは、ウェブサイトやアプリを作成するためのReactベースのオープンソースフレームワークです。 2000を超えるプラグインと、デフォルトで組み込まれているパフォーマンス、スケーラビリティ、およびセキュリティを使用して、想像できるあらゆるものを構築します。</p>
              <Link to="/blogIndex/" className="link">Blog</Link>
            </div>
            <div className="right-content">
              <figure><Image fluid={ data.hero.childImageSharp.fluid } className="hero-image" alt="" /></figure>
            </div>
          </div>
        </div>
      </Layout>
      <style>{`
        .content {
          display: flex;
          justify-content: space-between;
          margin: 200px auto;
        }
        .content .left-content {
          width: 40%;
        }
        .content .left-content .catch {
          margin: 0 0 30px 0;
        }
        .content .left-content .lead {
          margin: 0 0 50px 0;
        }
        .content .left-content .link {
          display: block;
          font-size: 16px;
          text-align: center;
          color: #fff;
          width: 200px;
          margin: 0 0 50px 0;
          padding: 15px;
          border-radius: 5px;
          background: #4b0082;
          transition: .5s;
        }
        .content .left-content .link:hover {
          background: #290046;
        }
        .content .right-content {
          width: 55%;
        }
        .content .right-content .hero-image {
          width: 150%;
        }
      `}
      </style>
    </>
  );
}

export default IndexPage;
