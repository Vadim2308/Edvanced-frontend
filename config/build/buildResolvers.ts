import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], // Расширения, которые НЕ надо указывать при импорте. Например: import getSome from './getSome.ts'
    preferAbsolute: true, // Абсолютные пути в приоритете
    modules: [options.paths.src, 'node_modules'], // Пути, относительно которых будут пути абсолютные
    mainFiles: ['index'], // index считать главным файлом. Вроде не обязательная настройка
    alias: {},
  };
}
