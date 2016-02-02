var autoprefixer = require('autoprefixer');
var precss = require('precss');
var atImport = require('postcss-import');

require('./src/styles/main.css');

module.exports = {
	entry: "./src/entry.js",
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{
				test:   /\.css$/,
				loader: "style-loader!css-loader!postcss-loader"
			}
		]
	},
	postcss: function(webpack) {
		return [
			autoprefixer({
				browsers: ['last 2 versions']
			}),
			atImport({
				path: './src/styles/*.css',
				addDependencyTo: webpack
			}),
			precss,
		];
	}
};