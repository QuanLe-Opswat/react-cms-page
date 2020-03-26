/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  /**
   * Homepage
   */
  createPage({
    path: '/',
    component: path.resolve('./src/pages/homepage/Homepage.js'),
    context: {
      page: 'home',
    },
  });

  createPage({
    path: '/login',
    component: path.resolve('./src/pages/login/LoginPage.js'),
    context: {
      page: 'login',
    },
  });
};
