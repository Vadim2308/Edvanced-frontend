export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export { getArticleDetailsData } from './model/selectors/articleDetails';

export { type Article } from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
export { ArticleList } from './ui/ArticleList/ArticleList';
export { ArticleViewSelector } from './ui/ArticleViewSelector/ArticleViewSelector';
export { ArticleSortSelector } from './ui/ArticleSortSelector/ArticleSortSelector';
export { ArticleTypeTabs } from './ui/ArticleTypeTabs/ArticleTypeTabs';
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
