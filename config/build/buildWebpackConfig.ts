import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(
  options: BuildOptions,
): webpack.Configuration {
  const { paths, mode, isDev } = options;
  return {
    mode,
    entry: paths.entry, // Входная точка приложения
    output: {
      filename: '[name].[contenthash].js', // Название файла и хэш, чтоб браузер не кэшировал файлы и отдавал всегда актуальный
      path: paths.build, // Название папки, в которой будет лежать сборка. Относительно файла конфига
      clean: true, // Автоматически чистит папку сборки
      publicPath: '/', // Обязательный параметр, иначе могут быть проблемы при роутинге с динамическими параметрами /articles/:id и т.д. Вообщем определяет путь, откуда браузер должен искать и загружать ресурсы при запросе страницы.
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
