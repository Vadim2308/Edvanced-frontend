import {classNames} from "shared/lib/classNames";
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";
import type {FC} from "react";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    theme?: AppLinkTheme;
    className?:string
}

export const AppLink:FC<AppLinkProps> = (props) => {
    const {to,className,children, theme = AppLinkTheme.PRIMARY,...otherProps} = props
    return (
        <Link to={to} className={classNames(cls.AppLink,{},[className,cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};