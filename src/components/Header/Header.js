import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header_main'>
        <img className='logo' src='https://media.wigzo.com/uploads/OuGkGKXTQoiRy0XcHjESNQ/userimagegallery/4f926262-c361-4a7d-8080-4f93ebc6311b.png?_=2020-04-14T14:18:27.201Z'/>
       <div className='header_content'>
       <svg xmlns="http://www.w3.org/2000/svg" width="13.451" height="30" viewBox="0 0 13.451 15" fill="white"><path d="M6.725,15a2.589,2.589,0,0,1-2.586-2.586H.486A.485.485,0,0,1,0,11.9V10.345a.47.47,0,0,1,.155-.362l1.4-1.4V6.207A5.257,5.257,0,0,1,6.208,1.034V0H7.243V1.034A5.2,5.2,0,0,1,11.9,6.207V8.586l1.4,1.4a.47.47,0,0,1,.155.362V11.9a.485.485,0,0,1-.485.518H9.311A2.59,2.59,0,0,1,6.725,15ZM5.174,12.414a1.552,1.552,0,1,0,3.1,0Z" transform="translate(0 0)"></path></svg>
        <img className='intionals' src="https://www.gravatar.com/avatar/41a17a59e57e2d448e1593fa119c68a9?d=https%3A%2F%2Fui-avatars.com%2Fapi%2FGaumanth%2BMaliyal%2B%2F128%2F0D8ABC%2Ffff" style={{height: '24px',width: '24px',borderRadius: '50px',marginLeft:'5px'}}></img>

       </div>

     </div>

  )
}

export default Header