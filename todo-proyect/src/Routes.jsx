import { createBrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import AddNote from './components/AddNote'
import App from './App'

export const router = createBrowserRouter([
  {
    element: <Nav />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: 'add-note',
        element: <AddNote />
      }
    ]
  }
])
