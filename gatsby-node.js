const path = require('path');
const { Reporter } = require('gatsby');

exports.createPages = async ({ graphql, actions, render }) => {
    const { createPage } = actions;

    const blogResult = await graphql(`
        query {
            allContentfulBlogPost(sort: {fields: publishDate, order: DESC}) {
                edges {
                    node {
                        id
                        slug
                    }
                    next {
                        title
                        slug
                    }
                    previous {
                        title
                        slug
                    }
                }
            }
            allContentfulCategory {
                edges {
                    node {
                        categorySlug
                    }
                }
            }           
        }  
    `);

    if (blogResult.errors) {
        Reporter.panicOnBuild(`GraphQLのクエリでエラーが発生しました`);
        return;
    }
    blogResult.data.allContentfulBlogPost.edges.forEach(({node, next, previous}) => {
        createPage({
            path: `/blog/post/${node.slug}`,
            component: path.resolve(`./src/template/blog-template.js`),
            context: {
                id: node.id,
                next,
                previous
            },
        });
    });
    // blogResult.data.allContentfulCategory.edges.forEach(({node}) => {
    //     createPage({
    //         path: `/blog/post/${node.categorySlug}`,
    //         component: path.resolve(`./src/template/category-template.js`),
    //         context: {
    //             skip: 0,
    //             limit: 0,
    //             currentPage: 1,
    //             isFirst: true,
    //             isLast: true,
    //         },
    //     });
    // });
}