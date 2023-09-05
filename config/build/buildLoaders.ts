import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

// лоадеры предназначены для того, чтоб обрабатывать файлы, которые выходят за рамки js. Jpeg png scss ts gif svg и т.д.
// Порядок имеет значение
export function buildLoaders({isDev}:BuildOptions):webpack.RuleSetRule[] {

    const cssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                isDev ? "style-loader" : MiniCssExtractPlugin.loader, // Важно сохранять порядок. MiniCssExtractPlugin.loader забирает из js файла стили, а потом уже делаем дальнейшие преобразования. В дев сборках это не нужно
                { // Добавляем поддержку модулей в проект
                    loader: "css-loader", // Translates CSS into CommonJS
                    options: {
                        modules:{
                            auto:(resPath:string) => Boolean(resPath.includes('.module.')), // Необходимо чтоб имена уникальные имена для стилей создавались только для файлов, которые имеют somename.module.scss.
                            // Иначе для глобальных классов они тоже создаются, и не применяются.
                            // В дев сборке в тулзах на странице index.html мы увидим 2 тега style.
                            // В одном лежат не модульные стили, в другом модульные
                            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]' // Имена файлов
                        },
                    }
                },
                // Compiles Sass to CSS
                "sass-loader",
            ],
    }

    // Если не используем TS - то нужен babel-loader. А так он умеет работать с tsx/jsx
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
        cssLoader
    ]
}