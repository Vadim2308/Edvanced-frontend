import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, type LegacyRef, memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { List, ListRowRenderer, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
import { ArticleView } from '../../model/consts/consts';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget;
  view?: ArticleView;
  virtualized?: boolean;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    target,
    className,
    articles,
    view = ArticleView.SMALL,
    isLoading,
    virtualized = true,
  } = props;
  const { t } = useTranslation();

  const pageRef = document.getElementById(PAGE_ID) as Element;

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Статьи не найдены')} />
      </div>
    );
  }

  const isBig = view === ArticleView.BIG;

  const { clientWidth = 1024 } = pageRef ?? {};

  const totalElementInRow = Math.abs(Math.ceil((clientWidth - 45 - 20) / 300)); // P.S костыли, Необходимо считать ширину карточки не на хардкорных значениях
  // eslint-disable-next-line no-nested-ternary
  const itemsPerRow = isBig ? 1 : totalElementInRow < 3 ? 3 : totalElementInRow;
  const rowCount = isBig
    ? articles.length
    : Math.ceil(articles.length / itemsPerRow);

  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);
    for (let i = fromIndex; i < toIndex; i++) {
      items.push(
        <ArticleListItem
          article={articles[i]}
          view={view}
          className={cls.card}
          key={articles[i].id}
          target={target}
        />,
      );
    }
    return (
      <div key={key} style={style} className={cls.row}>
        {items}
      </div>
    );
  };

  return (
    // P.S. дикие костыли с хардкодами в курсе. Для вирт.скролла использовать более новые библиотеки (react virtuoso)
    <WindowScroller scrollElement={pageRef}>
      {({
        width,
        height,
        registerChild,
        scrollTop,
        isScrolling,
        onChildScroll,
      }) => (
        <div
          ref={registerChild as unknown as LegacyRef<HTMLDivElement>}
          className={classNames(cls.wrapper, {}, [className, cls[view]])}
        >
          {virtualized ? (
            <List
              autoHeight
              rowCount={rowCount}
              height={height ?? 700}
              rowHeight={isBig ? 700 : 330}
              rowRenderer={rowRenderer}
              width={width ? width - 80 : 700}
              onScroll={onChildScroll}
              isScrolling={isScrolling}
              scrollTop={scrollTop}
            />
          ) : (
            articles.map((item) => (
              <ArticleListItem
                article={item}
                view={view}
                className={cls.card}
                key={item.id}
                target={target}
              />
            ))
          )}
          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>
  );
});
