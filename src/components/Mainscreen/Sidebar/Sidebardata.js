import React, { useEffect } from 'react'
import './Sidebardata.css'
const Sidebardata = ({name,id}) => {

  return (
    <div className='sidebardata_container'>
<div className='sidebardata'> 
    <svg className='img_icon' width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.305 1.10501C8.21673 1.03526 8.10751 0.997314 7.995 0.997314C7.88249 0.997314 7.77327 1.03526 7.685 1.10501L0.5 6.71001L1.12 7.50001L2 6.81001V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8947 2.73478 14 3 14H13C13.2652 14 13.5196 13.8947 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V6.81501L14.88 7.50001L15.5 6.71501L8.305 1.10501ZM9 13H7V9.00001H9V13ZM10 13V9.00001C10 8.7348 9.89464 8.48044 9.70711 8.29291C9.51957 8.10537 9.26522 8.00001 9 8.00001H7C6.73478 8.00001 6.48043 8.10537 6.29289 8.29291C6.10536 8.48044 6 8.7348 6 9.00001V13H3V6.03001L8 2.13501L13 6.03501V13H10Z" fill="#393939"></path>
    </svg>
      <p>{name}</p>
    </div>
    </div>
    
  )
}

export default Sidebardata