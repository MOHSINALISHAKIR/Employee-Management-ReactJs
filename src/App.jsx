import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashBoard from './components/Dashboard/EmployeeDashBoard'
import AdminDashBoard from './components/Dashboard/AdminDashBoard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStroge'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  // useEffect(()=>{
  //   // setLocalStorage()
  //   getLocalStorage()
  // },[])
  const [user,setUser]=useState(null)

  const authData = useContext(AuthContext)
  console.log(authData)
  // console.log(authData.employees)

  useEffect(()=>{
    if(authData){
      const loggedInUser = localStorage.getItem("loggedInUser")
      console.log(loggedInUser)
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
  },[authData])
  const handleLogin = (email,password)=>{
    if(email == 'admin@example.com' && password == '123'){
     setUser("admin")
     localStorage.setItem('loggedInUser',JSON.stringify({role:"admin"}))
    }else if(authData && authData.employees.find((e)=> email == e.email && e.password==password)){
      setUser("employees")
     localStorage.setItem('loggedInUser',JSON.stringify({role:"employee"}))


    }
    else{
      alert("invalid credentials")
    }

  }
  
  
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ""}
    {user == 'admin' ? <AdminDashBoard/> : <EmployeeDashBoard/>}
    {/* <EmployeeDashBoard/> */}
    {/* <AdminDashBoard/> */}
    </>
  )
}

export default App