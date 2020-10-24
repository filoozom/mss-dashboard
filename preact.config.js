const { resolve } = require('path')
const webpack = require('webpack')

export default (config, env, helpers) => {
	// Add a production flag
	config.plugins.push(
		new webpack.DefinePlugin({
			PRODUCTION: env.production,
		})
	)

	// Top-level aliases
	config.resolve.alias = Object.assign(
		{
			assets: resolve(__dirname, 'src/assets/'),
			components: resolve(__dirname, 'src/components/'),
			hooks: resolve(__dirname, 'src/hooks/'),
			lang: resolve(__dirname, 'src/lang/'),
			layouts: resolve(__dirname, 'src/layouts/'),
			lib: resolve(__dirname, 'src/lib/'),
			routes: resolve(__dirname, 'src/routes/'),
			src: resolve(__dirname, 'src'),
		},
		config.resolve.alias
	)

	// Camel case in css-loader
	const { loader: cssLoader } = helpers.getLoadersByName(
		config,
		'css-loader'
	)[0]
	cssLoader.options.localsConvention = 'camelCase'
}
