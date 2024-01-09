import { BuildOptions } from '../types/config';
import babelRemovePropsPlugin from '../babel/babelRemovePropsPlugin';

export function buildBabelLoader(options: BuildOptions) {
  const isProd = options.mode === 'production';
  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true, // Включаем кэширование, ускоряет при этом ребилд
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
          [
            '@babel/preset-react',
            {
              runtime: 'automatic', // Отвечает, чтоб в билде не падало по ошибке React is not defined
            },
          ],
        ],
        plugins: [
          options.isDev && require.resolve('react-refresh/babel'),
          isProd && [babelRemovePropsPlugin, { props: ['data-testid'] }],
        ].filter(Boolean),
      },
    },
  };
}
