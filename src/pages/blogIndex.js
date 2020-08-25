import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

import Layout from '../components/layout';
import SEO from '../components/seo';

export const query = graphql`
    query {
        allContentfulBlogPost(
            sort: {fields: publishDate, order: DESC}
            skip: 0, 
            limit: 2147483647
        ) {
            edges {
                node {
                    title
                    id
                    slug
                    eyecatch {
                        fluid(maxWidth: 500) {
                          ...GatsbyContentfulFluid_withWebp
                        }
                        description
                    }
                    content {
                        json
                    }
                }
            }
        }
    }   
`;

const BlogIndex = ({ data }) => {
    return (
        <>
            <Layout>
                <SEO
                    title="Blog List"
                    description="This is Blog List."
                />

                <div className="inner-main">
                    <article className="article">
                        <h2 className="title">Blog</h2>
                        {data.allContentfulBlogPost.edges.map(({ node }) => (
                            <div className="article-list" key={node.id}>
                                <Image
                                    fluid={node.eyecatch.fluid}
                                    alt={node.eyecatch.description}
                                    className="article-image"
                                />
                                <div className="right-article">
                                    <h3>{node.title}</h3>
                                    <p>
                                        {`${documentToPlainTextString(
                                            node.content.json
                                        ).slice(0, 50)}...`}
                                    </p>
                                    <Link to={`/blog/post/${node.slug}`}>
                                        <div>続きを読む</div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </article>
                </div>
            </Layout>
            <style>{`
                .article {
                    width: 600px;
                    margin: 125px auto;
                }
                .article .title {
                    margin: 0 0 50px 0;
                }
                .article .article-list {
                    display: flex;
                    justify-content: space-between;
                    margin: 0 0 50px 0;
                    padding: 0 0 50px 0;
                    border-bottom: 1px dashed #ccc;
                }
                .article .article-list .article-image {
                    display: block;
                    width: 150px;
                    height: 150px;
                }
                .article .article-list .right-article {
                    width: 70%;
                    bottom: 7px;
                    position: relative;
                }
                .article .article-list .right-article h3 {
                    color: #3cb371;
                    margin: 0 0 10px 0;
                }
                .article .right-article p {
                    margin: 0 0 10px 0;
                }
                .article .right-article a {
                    text-align: right;
                    font-size: 14px;
                    font-weight: 500;
                    color: #008080;
                }
                @media screen and (max-width:768px) { 
                    .article {
                        width: 85%;
                    }
                    .article .article-list {
                        display: flex;
                        flex-direction: column;
                    }
                    .article .article-list .article-image {
                        width: 100%;
                        height: 200px;
                    }
                    .article .article-list .right-article {
                        width: 100%;
                        bottom: 0;
                        position: relative;
                        margin: 20px 0 0 0;
                    }
                }
            `}</style>
        </>
    );
}

export default BlogIndex;