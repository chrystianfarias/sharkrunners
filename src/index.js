import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//Main
import MainPage from "./pages/main";
import AdminPage from "./pages/admin";
import NotFoundPage from "./pages/main/notFound";

//Admin
import AdminEventsPage from "./pages/admin/events";
import AdminNewEventPage from "./pages/admin/events/newEvent";
import AdminMainPage from "./pages/admin/main";
import LoginPage from "./pages/admin/login";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="admin" element={<AdminPage />}>
        <Route index element={<AdminMainPage />} />
        <Route path="eventos" element={<AdminEventsPage />} />
        <Route path="eventos/novo" element={<AdminNewEventPage />} />
      </Route>
      <Route path="login" element={<LoginPage />}/>
      <Route path="*" element={<NotFoundPage />}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
