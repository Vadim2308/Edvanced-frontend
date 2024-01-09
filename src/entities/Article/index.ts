export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export { getArticleDetailsData } from './model/selectors/articleDetails';

export { type Article } from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
export { ArticleList } from './ui/ArticleList/ArticleList';
export {
  ArticleView,
  ArticleType,
  ArticleSortField,
  ArticleBlockType,
} from './model/consts/consts';
export {
  articleDetailsActions,
  articleDetailsReducer,
  articleDetailsSlice,
} from './model/slice/articleDetailsSlice';
