import React from 'react'
import Nav from '../Nav/Nav'
import Menubar from '../Manubar/Manubar'

function Dashboard() {
  return (
    <>
    <Nav/>
    <div className="" style={{display:"flex", gap:"20px"}}>
        <Menubar />
    </div>
    </>
  )
}

export default Dashboard