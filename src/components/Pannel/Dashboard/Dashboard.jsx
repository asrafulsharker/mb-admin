import React from 'react'
import Nav from '../Nav/Nav'
import Menubar from '../Manubar/Manubar'
import CenterBoard from '../CenterBoard/CenterBoard'

function Dashboard() {
  return (
    <>
    <Nav/>
    <div className="" style={{display:"flex", gap:"20px"}}>
        <Menubar />
        <CenterBoard/>
    </div>
    </>
  )
}

export default Dashboard