import { render } from 'preact';
import { App } from './app.tsx';
import './index.css';

const rootElement = document.getElementById('app');

if (rootElement) {
    render(
        <App />, 
        rootElement
    )
}