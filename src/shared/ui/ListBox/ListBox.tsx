import { Fragment, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import cls from './ListBox.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom'

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: <T extends string>(value: T) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
};

export function ListBox(props: ListBoxProps) {
    const {
        className,
        items,
        value,
        defaultValue,
        readonly,
        onChange,
        direction = 'bottom',
        label,
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListbox
                disabled={readonly}
                as="div"
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >

                <HListbox.Button
                    disabled={readonly}
                    className={cls.trigger}
                >
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(cls.item, { [cls.active]: active, [cls.disabled]: item.disabled })}>
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}

                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
}