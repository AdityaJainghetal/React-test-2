import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import ColorContext from './colorContext.jsx'
createRoot(document.getElementById('root')).render(
    <ColorContext>
    <App />

    </ColorContext>
)