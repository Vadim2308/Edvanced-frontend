import path from 'path';
import webpack from 'webpack';
import type { BuildPaths } from '../build/types/config';

/**
 * У сторибука свой дефолтный вебпак конфиг. Переопределяем некоторые настройки, чтоб все работало
 * @param config
 */
export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    src: path.resolve(__dirname, '..', '..', 'src'),
    html: '',
    entry: '',
    build: '',
  };

  config!.resolve!.modules = [paths.src, 'node_modules'];
  config!.resolve!.extensions!.push('.ts', '.tsx');

  // Убираем стандартный обработчик svg, который зашит в сторибуке, и заменяем неа свой
  // eslint-disable-next-line no-param-reassign
  config.module!.rules = config.module!.rules!.map(
    // @ts-ignore
    (rule: webpack.RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    },
  );
  config.module!.rules!.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config.module!.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  });

  config.plugins!.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify(''),
    }),
  );

  return config;
};
