import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)


root.render (
  <App />
)