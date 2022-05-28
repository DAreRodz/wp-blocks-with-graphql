const baseConfig = require('@wordpress/scripts/config/webpack.config');

baseConfig.module.rules.push({
	test: /\.(graphql|gql)$/,
	exclude: /node_modules/,
	loader: 'graphql-tag/loader',
});

module.exports = baseConfig;
