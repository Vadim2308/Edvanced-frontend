import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

// лоадеры предназначены для того, чтоб обрабатывать файлы, которые выходят за рамки js. Jpeg png scss ts gif svg и т.д.
// Порядок имеет значение
export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/, // Преобразовывает svg в реакт-компоненты. Только для svg. Обработать другие форматы он не сможет. Для других форматов юзаем file-loader
    use: ['@svgr/webpack'],
  };

  // Транспилирует код из ECMA 2015 на более ранние стандарты. Когда выкатывают новые фичи, не все браузеры сразу их поддерживают. Мы можем не ждать обновлений, а сразу использовать новые фичи стандартов. Babel также полифилит новые методы и т.д.
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            },
          ],
        ],
      },
    },
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // Важно сохранять порядок. MiniCssExtractPlugin.loader забирает из js файла стили, а потом уже делаем дальнейшие преобразования. В дев сборках это не нужно
      {
        // Добавляем поддержку модулей в проект
        loader: 'css-loader', // Translates CSS into CommonJS
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')), // Необходимо чтоб имена уникальные имена для стилей создавались только для файлов, которые имеют somename.module.scss.
            // Иначе для глобальных классов они тоже создаются, и не применяются.
            // В дев сборке в тулзах на странице index.html мы увидим 2 тега style.
            // В одном лежат не модульные стили, в другом модульные
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]', // Имена файлов
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };

  // Если не используем TS - то нужен babel-loader. А так он умеет работать с tsx/jsx
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i, // Картинки, шрифты, и т.д.
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
