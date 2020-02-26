import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import store from './store';
import {Provider} from 'react-redux'

ReactDOM.render(<Suspense fallback={null}><Provider store={store}><App /></Provider></Suspense>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
