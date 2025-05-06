import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// import './styles.scss'; // optional if you're using SCSS

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
