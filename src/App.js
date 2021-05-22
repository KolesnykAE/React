// Зробити компоненту Counter, в якій будуть кнопки +1, -1, +100, -100.
// Де Counter це окрема компонента, на яку ми попадаємо через роути.
// Функція reducer винесена в окремий файл!

import './App.css';
import React from "react";
import Counter from "./components/Counter";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";




function App() {
    return (
        <Router>
            <div className='main-page'>
                <Link to={'/counter'} className='link'>Counter</Link>
                <Route path={'/counter'} component={Counter}/>
            </div>
        </Router>
    );
}

export default App;
