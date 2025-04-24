import React, { useContext } from 'react'
import Posts from '../../pages/Posts'
import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes, routes } from '../../router/Routes'
import Login from '../../pages/Login'
import { AuthContext } from '../../context'
import Loader from './Loader/Loader'

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);
  console.log(isAuth)

  if (isLoading) {
    return <Loader/>
  }

  return (

      isAuth
    ?
         <Routes>
         {privateRoutes.map(route => 
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        )}
        <Route path="*" element={<Posts />}/>
   </Routes>
   :
   <Routes>
   {publicRoutes.map(route => 
    <Route
      key={route.path}
      path={route.path}
      element={<route.component />}
    />
  )}
  <Route path="*" element={<Login />}/>
</Routes>
  )
}

export default AppRouter
