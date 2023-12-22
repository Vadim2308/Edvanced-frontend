import MiniCssExtractPlugin from 'mini-css-extract-plugin';

/**
 * style-loader — импортирует CSS-файлы и внедряет стили в DOM.
 * css-loader — позволяет работать с @import и url() внутри CSS.
 * babel-loader — позволяет писать код на современном JS, но исполнять его даже в старых браузерах
 * sass-loader - компилирует scss в сss
 */
export function buildCssLoaders(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // Инжектирует стили в DOM. Важно сохранять порядок.'style-loader' - нужен нам для инджекта стилей в head. MiniCssExtractPlugin.loader забирает из js файла стили, а потом уже делаем дальнейшие преобразования. В дев сборках это не нужно
      {
        // Добавляем поддержку css в проект. Умеет читать css, умеет читать все импорты внутри css, но он не занимается инъекцией наших стилей в DOM. Он просто грамотно обрабатывает css файлы
        loader: 'css-loader', // css-loader, для того, чтобы мы могли импортировать css в js
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')), // Необходимо чтоб имена уникальные имена для стилей создавались только для файлов, которые имеют somename.module.scss.
            // Иначе для глобальных классов они тоже создаются, и не применяются.
            // В дев сборке в тулзах на странице index.html мы увидим 2 тега style.
            // В одном лежат не модульные стили, в другом модульные
            localIdentName: isDev
              ? '[name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]', // Имена файлов
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };
}
