const path = require('path');

module.exports = {
  mode: 'development',
  entry: './home/script/script-ts/controller/home_controller.ts', // ponto de entrada do seu código
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // extensões a serem resolvidas
  },
  output: {
    filename: 'bundle.js', // nome do arquivo de saída
    path: path.resolve(__dirname, 'dist'), // caminho onde o arquivo de saída deve ser escrito
  },
};
