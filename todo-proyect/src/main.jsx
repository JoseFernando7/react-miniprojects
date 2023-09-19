import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes.jsx'
import { TaskProvider } from './context/TaskContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TaskProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </TaskProvider>
)
