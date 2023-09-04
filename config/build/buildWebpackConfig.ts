import webpack from "webpack";
import {BuildOptions} from "./types/config";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options:BuildOptions):webpack.Configuration {
    const { paths,mode,isDev} = options
    return {
        mode,
        entry: paths.entry, // Входная точка приложения
        output:  {
            filename: "[name].[contenthash].js", // Название файла и хэш, чтоб браузер не кэшировал файлы и отдавал всегда актуальный
            path: paths.build, // Название папки, в которой будет лежать сборка. Относительно файла конфига
            clean: true // Автоматически чистит папку сборки
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}