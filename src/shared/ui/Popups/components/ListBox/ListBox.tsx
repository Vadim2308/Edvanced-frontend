import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import type { DropdownDirection } from '@/shared/types/ui';
import { HStack } from '../../../Stack';
import { Button } from '../../../Button/Button';
import cls from './ListBox.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem<V> {
  value: V;
  content: ReactNode | ReactNode[];
  disabled?: boolean;
}

interface ListBoxProps<V> {
  onChange: (value: V) => void;
  items?: ListBoxItem<V>[];
  className?: string;
  value?: V;
  defaultValue?: V;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

export function ListBox<V = string>(props: ListBoxProps<V>) {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom left',
    label,
  } = props;

  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <HStack gap='4'>
      {label && <span>{`${label}>`}</span>}
      <HListBox
        disabled={readonly}
        as='div'
        className={classNames(popupCls.popup, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button as='span' className={cls.trigger}>
          <Button disabled={readonly}>{String(value) ?? defaultValue}</Button>
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, optionsClasses)}
        >
          {items?.map((item) => (
            <HListBox.Option
              key={String(item.value)}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active }) => (
                <li
                  data-popover-active={active}
                  className={classNames(cls.item, {
                    [popupCls.disabled]: item.disabled,
                  })}
                >
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
}
