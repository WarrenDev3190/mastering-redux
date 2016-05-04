var path = require('path'),
	webpack = require('webpack');

	module.exports = {
		entry: path.join(__dirname,'src/app/index'),
		output: {
			filename: 'bundle.js',
			path: path.join(__dirname, 'public/dist/js'),
			publicPath: '/static/'
		},
		devTools: ['eval-source-maps'],
		plugins: [new webpack.NoErrorsPlugin(), new webpack.HotModuleReplacementPlugin()],
		module: {
			loaders: [
				{
					test: /\.js?$/,
					loaders: ['babel'],
					include: path.join(__dirname,'src/app'),
					exclude: /node_modules/
				}
			]
		}	
	};