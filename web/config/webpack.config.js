const configDir = __dirname

module.exports = (config) => {
  config.module.rules[0].oneOf[5] = {
    test: /\.css$/,
    sideEffects: true,
    use: [
      'style-loader',
      { loader: 'css-loader', options: { importLoaders: 1 } },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: configDir,
          },
        },
      },
    ],
  }
  config.module.rules[0].oneOf.push({
    test: /\.(less)$/,
    use: [
      {
        loader: 'style-loader', // creates style nodes from JS strings
      },
      {
        loader: 'css-loader', // translates CSS into CommonJS
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: configDir,
          },
        },
      },
      {
        loader: 'less-loader', // compiles Less to CSS
      },
    ],
  })

  console.log('ish!', JSON.stringify(config, null, 2))

  return config
}
