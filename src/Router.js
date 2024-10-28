import React from 'react'
import Dashboard from './Routes/Dashboard'
import Attendance from './Routes/Attendance'
import Performance from './Routes/Performance'
import Students from './Routes/Students'
import Subjects from './Routes/Subjects'
import Teachers from './Routes/Teachers'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element = {<Dashboard/>}/>
        <Route path='/Attendance' element = {<Attendance/>}/>
        <Route path='/Performance' element = {<Performance/>}/>
        <Route path='/Students' element = {<Students/>}/>
        <Route path='/Subjects' element = {<Subjects/>}/>
        <Route path='/Teachers' element = {<Teachers/>}/>
    </Routes>
  )
}

export default Router
//For defining routes