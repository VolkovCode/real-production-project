import React, { Suspense, useContext, useState } from "react";
// import Counter from "./components/Counter";
import './styles/index.scss'
import { Link, Route, Routes } from "react-router-dom";
// import AboutPage from "./pages/AboutPage/AboutPage";
// import MainPage from "./pages/MainPage/MainPage";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Theme, ThemeContext } from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";



const App = () => {
    const {theme, toggleTheme} = useTheme();
    const bool = true;

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Переключить тему</button>
            <Link to="/">Главная</Link>
            <Link to="/about">О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
            {/* <Counter /> */}
        </div>
    )
}
export default App;