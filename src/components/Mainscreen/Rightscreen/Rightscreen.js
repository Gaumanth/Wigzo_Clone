import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Broadcastv2 from '../../../pages/Broadcastv2'
import Dashboard from '../../../pages/Dashboard'
import Automation from '../../../pages/Automation'
import Broadcast from '../../../pages/Broadcast'
import Conversation from '../../../pages/Conversation'
import Channels from '../../../pages/Channels'
import Analytics from '../../../pages/Analytics'
import Audience from '../../../pages/Audience'
import Settings from '../../../pages/Settings'

const Rightscreen = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/automation' element={<Automation/>} />
        <Route path='/broadcast' element={<Broadcast/>} />
        <Route path='/broadcastv2' element={<Broadcastv2/>} />
        <Route path='/conversation' element={<Conversation/>} />
        <Route path='/channels' element={<Channels/>} />
        <Route path='/analytics' element={<Analytics/>} />
        <Route path='/audience' element={<Audience/>} />
        <Route path='/settings' element={<Settings/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default Rightscreen