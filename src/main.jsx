import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { SocketContextProvider } from './context/SocketContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <SocketContextProvider>
    <RouterProvider router={router}/>
      </SocketContextProvider>
    </Provider>
  </StrictMode>,
)
