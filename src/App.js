
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Mainscreen/Sidebar/Sidebar';
// import Broadcastv2 from './pages/Broadcastv2';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Broadcastv2 from './pages/Broadcastv2'
import Dashboard from './pages/Dashboard'
import Automation from './pages/Automation'
import Broadcast from './pages/Broadcast'
import Conversation from './pages/Conversation'
import Channels from './pages/Channels'
import Analytics from './pages/Analytics'
import Audience from './pages/Audience'
import Settings from './pages/Settings'

function App() {

  return (
    <>
    <Header/>
     <div className="App">
     <Sidebar/>
     <div className='rightScreen'> 
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
     </div>
     </div>
    </>
     
   
  );
}

export default App;
