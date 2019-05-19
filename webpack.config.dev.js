module: {
  rules: [
    {
	  test: /\.js$/,
	  exclude: /node_modules/,
	  include: [path.resolve(__dirname, "node_modules/react-native-paper")],
	  use: {
	    loader: 'babel-loader'
	  }
	}
  ]
}