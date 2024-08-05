import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Todo from './components/Todo';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <Todo />
        </Provider>
    );
}

export default App;
