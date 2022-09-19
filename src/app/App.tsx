import React from "react";
import './styles/index.scss'
import { Link } from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/NavBar";






const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Переключить тему</button>
            <Navbar/>
            <AppRouter />

        </div>
    )
}
export default App;