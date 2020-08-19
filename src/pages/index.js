import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

// 省略せずに記述
// export const query = graphql `
//   query {
//     file(relativePath: {eq: "hero.png"}) {
//       childImageSharp {
//         fluid(maxWidth: 1600) {
//           base64
//           aspectRatio
//           src
//           srcSet
//           srcWebp
//           srcSetWebp
//           sizes
//         }
//       }
//     }
//   }
// `;

// Flagmentで記述
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
    <Layout>
      <SEO title="Home" />
      <div className="content">
        <div className="left-content">
          <h1 className="catch">Reactユーザーのためのモダンフレームワーク</h1>
          <p className="lead">Gatsbyは、ウェブサイトやアプリを作成するためのReactベースのオープンソースフレームワークです。 2000を超えるプラグインと、デフォルトで組み込まれているパフォーマンス、スケーラビリティ、およびセキュリティを使用して、想像できるあらゆるものを構築します。</p>
          <Link to="/about/" className="link">About</Link>
        </div>
        <div className="right-content">
          <figure><Image fluid={ data.hero.childImageSharp.fluid } className="hero-image" alt="" /></figure>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
