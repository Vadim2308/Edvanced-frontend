import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildBabelLoader } from './loaders/buildBabelLoader';

// лоадеры предназначены для того, чтоб обрабатывать файлы, которые выходят за рамки js. Jpeg png scss ts gif svg и т.д.
// Порядок имеет значение
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;
  const svgLoader = {
    test: /\.svg$/, // Преобразовывает svg в реакт-компоненты. Только для svg. Обработать другие форматы он не сможет. Для других форматов юзаем file-loader
    use: ['@svgr/webpack'],
  };

  // Транспилирует код из ECMA 2015 на более ранние стандарты. Когда выкатывают новые фичи, не все браузеры сразу их поддерживают. Мы можем не ждать обновлений, а сразу использовать новые фичи стандартов. Babel также полифилит новые методы и т.д.
  const babelLoader = buildBabelLoader(options);

  const cssLoader = buildCssLoaders(isDev);

  // Если не используем TS - то нужен babel-loader. А так он умеет работать с tsx/jsx
  // const typescriptLoader = {
  //   test: /\.tsx?$/,
  //   use: 'ts-loader',
  //   exclude: /node_modules/,
  // };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i, // Картинки, шрифты, и т.д. Можно импортить (н-р import AvatarImg from './storybook.jpeg') и в AvatarImg будет храниться ссылка на эту картинку
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [fileLoader, svgLoader, babelLoader, cssLoader];
}
