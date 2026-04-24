import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import SearchContext from './context/SearchContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="533671861886-4lls0cr5fvqblu9pmm0uvj66e9olop26.apps.googleusercontent.com">
      <SearchContext>
        <App />
      </SearchContext>
    </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
