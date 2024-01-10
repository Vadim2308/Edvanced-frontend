import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import UserIcon from '@/shared/assets/icons/user-filled.svg';
import { Skeleton } from '../Skeleton';
import { Icon } from '../Icon';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = (props: AvatarProps) => {
  const { className, src, size, alt } = props;
  const mods: Mods = {};
  const styles = useMemo<CSSProperties>(
    () => ({ width: size || 100, height: size || 100 }),
    [size],
  );

  return (
    <AppImage
      errorFallback={<Icon width={size} height={size} Svg={UserIcon} />}
      fallback={<Skeleton width={size} height={size} border='50%' />}
      src={src}
      style={styles}
      className={classNames(cls.Avatar, mods, [className])}
      alt={alt}
    />
  );
};
