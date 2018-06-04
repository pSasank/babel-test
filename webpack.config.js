var path = require('path');
var webpack = require('webpack');
module: {
    loaders: [
      {
        loader: "babel-loader",
  
        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, "src"),
        ],
        entry: [
            // Set up an ES6-ish environment
            'babel-polyfill',
          
            // Add your application's scripts below
            './src/main',
          ],
        // Only run `.js` files through Babel
        test: /\.js$/,
        devtool: 'source-map',
        // Options to configure babel with
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0'],
        }
      },
    ]
  }