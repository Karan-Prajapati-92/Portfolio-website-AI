import { renderToString } from 'react-dom/server';
import App from './App.jsx';

// Used at build time only: renders the page to HTML so the hero text is in the
// first response instead of waiting for JavaScript.
export function render() {
  return renderToString(<App />);
}
