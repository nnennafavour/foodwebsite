import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Toaster } from 'react-hot-toast'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 4000,
        className: `
          bg-white text-gray-900
          dark:bg-gray-900 dark:text-white
          shadow-lg
        `,
        style: {
          zIndex: 999999,
        },
        success: {
          iconTheme: {
            primary: '#16a34a',
            secondary: '#ffffff',
          },
        },
      }}
    />
    <App />
  </React.StrictMode>
)
