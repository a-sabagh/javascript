const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			title: 'Persian Date Babakhani',
		})
	]
}
