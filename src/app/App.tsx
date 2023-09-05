import React, {Suspense} from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import "./styles/index.scss"
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/providers/routes";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

export enum Theme {
    LIGHT='light',
    DARK = 'dark'
}


export const App = () => {
    const {theme} = useTheme()
    return (
        <div className={classNames('app',{},[theme])}>
            {/*Suspense для интернационализации i18n*/}
            <Suspense fallback="">
                <Navbar/>
                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};
