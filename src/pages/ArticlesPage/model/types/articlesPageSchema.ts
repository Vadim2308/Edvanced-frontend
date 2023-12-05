import type { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleType, ArticleView } from 'entities/Article';
import type { SortOrder } from 'shared/types';
import { ArticleSortField } from 'entities/Article/model/types/article';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  // pagination
  page: number;
  limit: number;
  hasMore: boolean;
  // filters
  view: ArticleView;
  type: ArticleType;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  _inited: boolean;
}
