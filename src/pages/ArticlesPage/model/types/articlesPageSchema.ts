import type { EntityState } from '@reduxjs/toolkit';
import {
  Article,
  ArticleSortField,
  ArticleType,
  ArticleView,
} from '@/entities/Article';
import type { SortOrder } from '@/shared/types/sort';

export interface ArticlesPageSchema
  extends EntityState<Article, Article['id']> {
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
