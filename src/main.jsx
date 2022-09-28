import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import {App} from "./FirstApp";
//import {FirstApp2} from "./FirstApp2";
import {CounterApp} from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        
        <CounterApp value={0}/>

    </React.StrictMode>
)