import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrushProvider } from './context/BrushContext'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrushProvider>
        <App />
    </BrushProvider>

  </StrictMode>,
)
