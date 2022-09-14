import path from 'path';
import webpack from 'webpack';
// import { buildLoaders } from './confg/build/buildLoaders';
// import { buildPlugins } from './confg/build/buildPlugins';
// import { buildResolvers } from './confg/build/buildResolvers';
import { buildWebpackConfig } from './confg/build/buildWebpackConfig';
import { BuildPaths, BuildEnv } from './confg/build/types/config';



export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
  };
  
  const mode = env.mode || 'development';
  const PORT = env.port || 3000;
  const isDev = mode === 'development';
  
  const config: webpack.Configuration = buildWebpackConfig({
    mode: mode,
    paths,
    isDev,
    port: PORT
  });
  return config;
};