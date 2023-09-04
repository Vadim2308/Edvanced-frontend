import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths}:BuildOptions):webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({ // Создает HTML в build папке
        template: paths.html // где лежит темплейт с html
        }),
        new webpack.ProgressPlugin(), // Ход текущей сборки в консоли
        new MiniCssExtractPlugin({ //Этот плагин извлекает CSS в отдельные файлы. Он создает файл CSS для каждого файла JS, который содержит CSS. По дефолту вебпак все стили складывает в бандл, где лежит весь js. Это не очень хорошо, поэтому оттуда эти стили надо выдернуть
            filename:'css/[name].[contenthash:8].css',
            chunkFilename:'css/[name].[contenthash:8].css', // Как будут называться чанки, которые будут подгружаться лениво
        })
    ]
}