import { BuildOptions } from "./types/config";
import webpack from 'webpack';
import { buildResolvers } from "./buildResolvers";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import path from "path";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {paths, mode} = options;

  return {
    mode: mode,
    entry: paths.entry,
    devtool: 'inline-source-map',
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
}