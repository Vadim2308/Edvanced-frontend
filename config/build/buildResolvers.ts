import {ResolveOptions} from "webpack";

export function buildResolvers():ResolveOptions{
    return {
        extensions: ['.tsx', '.ts', '.js'] // Расширения, которые НЕ надо указывать при импорте. Например: import getSome from './getSome.ts'
    }
}