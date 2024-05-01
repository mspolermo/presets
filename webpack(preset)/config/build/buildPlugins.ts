import webpack, { Configuration, DefinePlugin,  } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

import { BuildOptions } from "./types/types";
import path from "path";

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
    const isDev = options.mode === 'development';
    const isProd = options.mode === 'production';

    const plugins: Configuration['plugins'] = [
        /**Авто-монтирует реакт-приложения в главный HTML */
        new HtmlWebpackPlugin(
            {
                template: options.paths.html,
                favicon: path.resolve(options.paths.public, 'favicon.svg')
            }
        ),
        /**Объявляет глобальные переменные для Webpack(также их нужно декларировать для TS) */
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(options.platform), 
        })
    ];

    if (isDev) {
        /**Отображает статус в % при сборке пректа */
        plugins.push(new webpack.ProgressPlugin());
        /**Выносит проверку типов в отдельный процесс: не награжая сборку */
        plugins.push(new ForkTsCheckerWebpackPlugin());
        /**Позволяет использовать Hot Module Replacemant в реакте */
        plugins.push(new ReactRefreshWebpackPlugin())
    }

    if (isProd) {
        /**Выносит CSS из JS-бандла в *.css-файл  */
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }));
        /** Копирует файлы из /public/locales/ в корневую папку прод-бандла/locales/ */
        plugins.push(
            new CopyPlugin({
              patterns: [
                {
                    from: path.resolve(options.paths.public, 'locales'),
                    to: path.resolve(options.paths.output, 'locales')
                }
              ],
            })
        )
    }

    if (options.analyzer) {
        /** Открывает анализатор веса бандла и чанков после сборки  */
        plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins
}