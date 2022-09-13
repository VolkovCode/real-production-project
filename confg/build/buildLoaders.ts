import webpack from "webpack"

export function buildLoaders(): webpack.RuleSetRule[] {
    const typeScriptLoaders = [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ];
    return typeScriptLoaders;
}