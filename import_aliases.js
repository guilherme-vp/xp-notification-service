/**
 * This is a list of aliases you can use to avoid relative import paths; it's what makes import
 * paths like `components/some/deep/path` work. Be careful about the paths you add here: If you use the
 * name of a package that's already installed via npm/yarn, then this list will take priority over
 * that package. (For example, if you installed `graphql` and added a `graphql: './src/graphql'`
 * alias here, then the `graphql` package would be overridden by your alias.)
 *
 * For more details, see:
 * - https://github.com/tleunen/babel-plugin-module-resolver/
 */

module.exports = {
  '@utils': './src/utils',
  '@infra': './src/infra',
  '@services': './src/services',
  '@domain_models': './src/domain_models',
  '@domains': './src/domains',
};
