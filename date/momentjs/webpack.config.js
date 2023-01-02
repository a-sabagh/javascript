const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
	mode: "development",
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			favicon: './src/favicon.png',
		})
	]
}
module.exports = config
