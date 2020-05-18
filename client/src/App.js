import React from 'react';
import './styles.css';
import 'bulma/css/bulma.css';

import { Header } from './components/Header/Header';
import { Todos } from './components/Todos/Todos';
import { Toast } from './components/Toast/Toast';
import { TodoProvider } from './context/TodoState';

export default function App() {
  return (
    <TodoProvider className="App">
      <Header />
      <div className="container">
        <Todos />
      </div>
      <Toast />
    </TodoProvider>
  );
}
