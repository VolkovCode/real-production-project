import React, { Suspense, useEffect, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';
import { userActions } from 'entities/User';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function App() {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
export default App;
