import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Sidebar.css'
import Sidebardata from './Sidebardata'
import { sideBarData } from '../../../constants/constant'

const Sidebar = () => {
  const text = useRef();

const handleNavigate=()=>{
  console.log(text)
}



  return (
    <div className='sidebar__main'>
      <div className='sidebar__container' ref={text} onClick={handleNavigate}>
        {
          sideBarData.map((item, i) => (
           
            
               <Sidebardata ref={text} id={item.id} name={item.name}/>
             
           
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar
