import React from 'react';
import Home from '../pages/Home/Home';
import Error from '../pages/Error/Error';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

export default function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="*" element={<Error />} />
        </Routes>
        </BrowserRouter>
    )
}