var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var postcssImport = require('postcss-import');

module.exports = {
	entry: "./src/main.js",
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: "style-loader!css-loader!postcss-loader"
			}
		]
	},
	postcss: function(webpack) {
		return [
			autoprefixer({
				browsers: ['last 2 versions']
			}),
			postcssImport({
				path: './src/styles/*.css',
				addDependencyTo: webpack
			}),
			precss
		];
	},
	devtool: 'source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},
};