import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import type { SidebarItemType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  collapsed: boolean;
  item?: SidebarItemType;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { t } = useTranslation();
  const { item, collapsed } = props;
  return (
    <AppLink
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
});
