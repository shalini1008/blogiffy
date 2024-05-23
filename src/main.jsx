import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AddPost, AllPost, EditPost, Home, Post,LogIn, Signup} from './pages'
import { Protection } from './components/AuthLayout.jsx'
import App from './App.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },{
        path: 'login',
        element: (
          <Protection authentication={false}>
            <LogIn />
          </Protection>
        )
      },
      {
        path: "/signup",
        element: (
          <Protection  authentication>
            {" "}
            <Signup/>
            </Protection>
        )
      },{
        path: '/create-account',
        element: (
          <Protection authentication={false}>
            <Signup />
          </Protection>
        )
      },{
        path: "/all-posts",
        element: (
          <Protection  authentication>
            {" "}
            <AllPost/>
            </Protection>
        )
      },{
        path: '/blogs',
        element: (
          <Protection authentication>
            <AllPost/>
          </Protection>
        )
      },{
        path: '/post/:slug',
        element: (
          <Protection authentication>
            <Post />
          </Protection>
        )
      },{
        path: '/add-post',
        element: (
          <Protection authentication>
             {" "} 
            <AddPost />
          </Protection>
        )
      },{
        path: '/edit-post/:slug',
        element: (
          <Protection authentication>
            <EditPost />
          </Protection>
        )
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)