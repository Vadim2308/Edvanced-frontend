import React from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import "./styles/index.scss"
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/providers/routes";
import {Navbar} from "widgets/Navbar";

export enum Theme {
    LIGHT='light',
    DARK = 'dark'
}

export const App = () => {
    const {theme,toggleTheme} = useTheme()
    return (
        <div className={classNames('app',{},[theme])}>
            <Navbar/>
            <AppRouter/>
            <button onClick={toggleTheme}>TOGGLE</button>
        </div>
    );
};
