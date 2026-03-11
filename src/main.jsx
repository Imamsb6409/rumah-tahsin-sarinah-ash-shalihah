  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'

  import {Route, Routes,BrowserRouter} from 'react-router';

  import './index.css'
  import App from './App.jsx'
  import Main from './layout/Main.jsx';

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} >
          <Route path='/' element={<Main />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>,
  )
