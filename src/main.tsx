import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// HashRouter, not BrowserRouter: this app is also published as a static
// Artifact with no server-side rewrite rules, so routes must work without
// one (a hard refresh on /resources would 404 under BrowserRouter there).
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
