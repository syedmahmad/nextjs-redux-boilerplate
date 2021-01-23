var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const { routesRewrites }  = require("./config/routesRewrites");
const { environment } = require("./config/environment");

module.exports = (phase, { defaultConfig }) => ({
	distDir: 'build',
	crossOrigin: 'anonymous',
	pageExtensions: ['jsx', 'js'],
	target: 'server',
	plugins: ['tailwindcss', 'autoprefixer'],
	optimization: {
		minimizer: [
			// we specify a custom UglifyJsPlugin here to get source maps in production
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				uglifyOptions: {
					compress: false,
					ecma: 6,
					mangle: true
				},
				sourceMap: true
			})
		]
	},
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

		if (config.optimization.splitChunks) {
			config.optimization.splitChunks.cacheGroups.shared = {
				name: 'app-other',
				test: /\.css$/,
				chunks: 'all',
				enforce: true,
			}
		}
		// config.plugins.push(new CompressionPlugin({cache: true, test: /\.(js|css|scss|jsx|svg|png)$/, algorithm: 'brotliCompress'}));
		config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/, /react-redux-toastr$/, /redux$/, /react-slick$/, /react-tiny-link$/, /react-phone-input-2$/, /suneditor-react$/, /react-infinite-scroller$/, /react-hotjar$/, /emoji-js$/, /react-loading$/, /socket$/));
		config.plugins.push(new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.optimize\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorPluginOptions: {
				preset: ['default', { discardComments: { removeAll: true } }],
			},
			canPrint: true
		}));

		config.module.rules.push({
			test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
			use: {
				loader: 'url-loader',
				options: {
					limit: 100000
				}
			}
		})

		return config
	},
	// handle if user refresh page and route is not exist as we are displaying Optional decorator 
	// for the URL that will be shown in the browser, not the actual URL....
	async rewrites() {
		return [...routesRewrites]
	},
	// Adding environment file here..
	env: {
		...environment
	},
});
