
import './App.css'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

import Users from './pages/Users'
import Profile from './pages/Profile'
import PageNotFound from './pages/PageNotFound'
import Product from './pages/Product'
import New from './pages/New'
import Featured from './pages/Featured'
import UserDetails from './pages/UserDetails'
import React, {Suspense} from 'react'
import PostDetails from './PostDetails'

const ReactLazy = React.lazy(()=> import("./pages/About"));

function App() {
  return (
    <>
      <div>
        <h1>Social Media APP</h1>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='about' element={<Suspense fallback='Loading....'>
            <ReactLazy />
          </Suspense>}/>
           <Route path='users' element={<Users />}/>
          <Route path='profile' element={<Profile />}/>
          <Route path='products' element={<Product />}>
            <Route index element={<Featured />}/>
            <Route path='new' element={<New />}/>
            <Route path='featured' element={<Featured />}/>
          </Route>
         <Route path="users/:userId" element={<UserDetails />}/>
          <Route path="posts/:postId" element={<PostDetails />}/>
          <Route path='*' element={<PageNotFound />}/>
        </Routes>
      
       </div>
    </>
  )
}

export default App
