# build-config

## Описание

Преднастроенный переиспользуемый сборщик Webpack, используется для всех [сервисов](/services/)

## Функционал

Реализовано:

- генерация имен выходных файлов на основе хэша - [doc](https://webpack.js.org/configuration/output/#template-strings)

- использование переменных окружения - [doc](https://webpack.js.org/guides/environment-variables/#root)

- автомонтироваеие react приложения и favicon в главный HTML-файл приложения (HTML и favicon.svg должны лежать в /public/ каждого приложения) - [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin)

- использование TypeScript - [doc](https://webpack.js.org/guides/typescript/)

- сервер разработки - [Webpack DeV Server](https://github.com/webpack/webpack-dev-server)

- использование карты кода, для поиска источника вознишей ошибки (в dev режиме) - [Source Map](https://webpack.js.org/configuration/devtool/)

- использование модульных [scss](https://webpack.js.org/loaders/sass-loader/)

- разделение css и js для prod билда (+ использование хэш-нейминга для css) - [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)

- использование бандл-аналайзера (через переменную окружения --env analyzer=true) [Webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)

- использование [алиасов](./src/buildResolvers.ts)

- обработка кртинок jpg, jpeg, png - [AssetManagement](https://webpack.js.org/guides/asset-management/)

- обработка svg как реакт-компонентов - [SVGR](https://react-svgr.com/docs/webpack/)

- использование переменных сборки - [DefinePlugin](https://webpack.js.org/plugins/define-plugin/)

- проверка типизации в отдельном процессе - [Fork-ts-checker](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/)

- [Hot Replace Module](https://github.com/gaearon/react-hot-loader/)

- tsLoader/babelLoader ([на выбор](./src/buildLoaders.ts))

