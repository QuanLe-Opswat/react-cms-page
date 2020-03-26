/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const { WrapPage, WrapRoot } = require('./src/WrapPage');

exports.wrapPageElement = ({ element, props }) => {
  return WrapPage({ element, props });
};

exports.wrapRootElement = ({ element }) => {
  return WrapRoot({ element });
};

