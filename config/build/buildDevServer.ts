import type { Configuration as DevServerConfigurations } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfigurations {
  return {
    https: false,
    port: options.port,
    open: true, // Автоматически открывать в браузере страницу с приложением,
    historyApiFallback: true, // При выключенной опции, даже когда в роутере приложения все норм,
    // в дев сервере нельзя зайти на любой роут кроме главного, выкидывает ошибку.
    // В приложение можно попасть только через главную страницу.
    // Эта опция позволяет все страницы, про которые не известно, проксировать через главную, т.е. будет всегда переходить на "/"
    client: {
      overlay: false, // Отключаем оверлей, если произошла ошибка
    },
  };
}
