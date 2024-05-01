import webpack from 'webpack';
import path from 'path';
import { buildWebpack, BuildMode, BuildPaths, BuildPlatform } from '@packages/build-config';
import packageJson from './package.json';

interface EnvVariables {
    mode?: BuildMode;
    port?: number;
    analyzer?: boolean;
    platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src')
    }

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3002,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop'
    });

    config.plugins.push(new webpack.container.ModuleFederationPlugin({
        name: 'admin', // название микрофтронтенда
        filename: 'remoteEntry.js', // название файла, который будет удалённо подключатся в host-контейнер
        exposes: {
            // самая важная опция, указываем что хотим предоставить приложению-контейнеру (отдать наружу)
            './Router': './src/router/Router.tsx',
        },
        shared: {
            //указываем как библиотеки общие и какие должны шариться
            ...packageJson.dependencies,
            react: {
                eager: true, // Необходимость библиотеку подгрузить сразу (антоним лэйзи лоадинга)
                requiredVersion: packageJson.dependencies['react'] // требуемая версия
            },
            'react-router-dom': {
                eager: true,
                requiredVersion: packageJson.dependencies['react-router-dom']
            },
            'react-dom': {
                eager: true,
                requiredVersion: packageJson.dependencies['react-dom']
            }
        }
    }))

    return config;
}
