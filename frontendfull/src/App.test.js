import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from "./ThemeProvider"
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(  
  <ThemeProvider>
    <App />
  </ThemeProvider>,
   div);
  ReactDOM.unmountComponentAtNode(div);
});
