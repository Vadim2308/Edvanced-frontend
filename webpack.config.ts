import path from 'path'
import webpack from "webpack"
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";


export default (env:BuildEnv):webpack.Configuration => {

    const paths:BuildPaths = {
        entry: path.resolve(__dirname,'src','index.tsx'), // Входная точка приложения,
        build: path.resolve(__dirname,'build'), // Название папки, в которой будет лежать сборка. Относительно файла конфига,
        html: path.resolve(__dirname,'public','index.html'),
        src: path.resolve(__dirname,'src'),
    }

    const mode = env.mode || 'development'
    const PORT = Number(env.port) || 3000;

    const isDev = mode === 'development'

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    });
}