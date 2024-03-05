import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app.tsx'
import './index.css'
import { ShoppingListContextProvider } from './context/shopping-list-context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ShoppingListContextProvider>
      <App />
    </ShoppingListContextProvider>
  </React.StrictMode>,
)
