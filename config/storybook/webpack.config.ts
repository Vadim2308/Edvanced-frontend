import path from 'path';
import webpack from 'webpack';
import { BuildPaths } from '../build/types/config';

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
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');

  // Убираем стандартный обработчик svg, который зашит в сторибуке, и заменяем неа свой
  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  });

  return config;
};
