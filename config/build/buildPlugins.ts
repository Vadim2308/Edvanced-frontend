import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({
  paths,
  isDev,
  apiUrl,
  project,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      // Создает HTML в build папке
      template: paths.html, // где лежит темплейт с html
      publicPath: '/',
    }),
    new webpack.ProgressPlugin(), // Ход текущей сборки в консоли
    new MiniCssExtractPlugin({
      // Этот плагин извлекает CSS в отдельные файлы. Он создает файл CSS для каждого файла JS, который содержит CSS.
      // По дефолту вебпак все стили складывает в бандл, где лежит весь js. Это не очень хорошо, поэтому оттуда эти стили надо выдернуть
      // Обычно стили CSS в веб-приложениях могут быть встроены непосредственно в JavaScript или добавлены в тег <style> в HTML.
      // Однако, при разработке более крупных и сложных приложений, удобно иметь возможность разделить стили и скрипты.
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css', // Как будут называться чанки, которые будут подгружаться лениво
    }),
    new webpack.DefinePlugin({
      // Плагин, с помощью которого можно прокидывать глобальные переменные
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),
    new CopyPlugin({
      patterns: [{ from: paths.locales, to: paths.buildLocales }],
    }),
  ];

  if (isDev) {
    plugins.push(
      new ReactRefreshWebpackPlugin(),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
    );
  }

  return plugins;
}
