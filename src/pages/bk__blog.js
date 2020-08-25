import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
// import useContentfulImage from '../utils/useContentfulImage';

const options = {
  renderNode: {
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3>
        <FontAwesomeIcon icon={faCheckSquare} className="check" />
        {children}
      </h3>
    ),
    // [BLOCKS.EMBEDDED_ASSET]: node => (
    //   <img
    //     src={node.data.target.fields.file["ja-JP"].url}
    //     alt={
    //       node.data.target.fields.description
    //       ? node.data.target.fields.description["ja-JP"]
    //       : node.data.target.fields.title["ja-JP"]
    //     }
    //   />
    // ),
    // 保留
    // [BLOCKS.EMBEDDED_ASSET]: node => (
    //   <Image
    //     fluid={useContentfulImage(node.data.target.fields.file["ja-JP"].url)}
    //     alt={
    //       node.data.target.fields.description
    //       ? node.data.target.fields.description["ja-JP"]
    //       : node.data.target.fields.title["ja-JP"]
    //     }
    //   />
    // ),
  },
  renderText: text => {
    return text.split('\n').reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  }
}

export const query = graphql `
  query {
    contentfulBlogPost {
      title
      publishDateJP:publishDate(formatString: "YYYY年MM月DD日")
      publishDate
      category {
        category
        categorySlug
        id
      }
      eyecatch {
        fluid(maxWidth: 1600) {
          ...GatsbyContentfulFluid_withWebp
        }
        description
      }
      content {
        json
      }
    }
  }
`;

const Blog = ({ data }) => {
  return (
    <>
      <Layout>
          <SEO title="Blog" />

          <figure>
            <Image
              fluid={data.contentfulBlogPost.eyecatch.fluid}
              alt={data.contentfulBlogPost.eyecatch.description}
              className="eycach-image"
            />
          </figure>

          <div className="inner-main">
            <article className="article">
              <h2 className="title">{ data.contentfulBlogPost.title }</h2>

              <aside className="info">
                <time dateTime={ data.contentfulBlogPost.publishDate }>
                  <FontAwesomeIcon icon={faClock} /> { data.contentfulBlogPost.publishDateJP }
                </time>
                <div className="category">
                  <FontAwesomeIcon icon={faFolderOpen} />
                  <ul>
                    {data.contentfulBlogPost.category.map(cat => (
                      <li className={cat.categorySlug} key={cat.id}>
                        {cat.category}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>

              <div className="post-body">
                {documentToReactComponents(
                  data.contentfulBlogPost.content.json,
                  options
                )}
              </div>
            </article>
        </div> 
      </Layout>
      <style>{`
        .eycach-image {
          height: 50vh;
        }
        .article {
          width: 500px;
          margin: 75px auto;
        }
        .article .title {
          margin: 0 0 10px 0;
        }
        .article .info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #3cb371;
          margin: 0 0 35px 0;
        }
        .article .info time {
          font-size: 12px;
        }
        .article .info .category {
          display: flex;
          align-items: center;
        }
        .article .info .category ul li {
          display: inline-block;
          font-size: 12px;
          margin: 0 0 0 15px;
          bottom: 2px;
          position: relative;
        }
        .article .post-body p {
          margin: 0 0 30px 0;
        }
        .article .post-body img {
          display: block;
          width: 100%;
          margin: 0 0 30px 0;
          vertical-align:top;
        }
        .article .post-body h3 {
          color: #ff6347;
          margin: 0 0 10px 0;
        }
        .article .post-body h3 .check {
          margin: 0 10px 0 0;
        }
        @media screen and (max-width:768px) { 
          .article {
            width: 85%;
          }
        }
      `}
      </style>
    </>
  );
}

export default Blog;
