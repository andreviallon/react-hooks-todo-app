import React from 'react';
import './Header.css';

export function Header() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <h1 href="/" className="navbar-item">
          React / Node Todo App
        </h1>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/andreviallon/react-hooks-todo-app"
                className="button is-primary"
              >
                <strong>View in Github</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
