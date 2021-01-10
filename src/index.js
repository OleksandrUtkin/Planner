import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './components/App';
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./store/reducers/rootReducer";
import {Provider} from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from "redux-thunk";
// import reportWebVitals from './reportWebVitals';

const saveToLocalStore = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.log(e);
    }
};

const loadFromLocalStore = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.log(e.message);
        return undefined;
    }
};

const persistedState = loadFromLocalStore();

const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);

store.subscribe(() => saveToLocalStore(store.getState()));

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
