import './App.css'
import { Route, Routes } from 'react-router-dom'
import Auth from './Pages/Auth'
import PageNotFound from './Pages/PageNotFound'
import Home from './users/Pages/Home'
import HowItWorks from './users/Pages/HowItWorks'
import Contact from './users/Pages/Contact'
import Projects from './users/Pages/Projects'
import ViewProject from './users/Pages/ViewProject'
import Profile from './users/Pages/Profile'
import AdminHome from './Admin/pages/AdminHome'
import WorkRequest from './Admin/pages/WorkRequest'
import Contractors from './Admin/pages/Contractors'
import Users from './Admin/pages/Users'
import Settings from './Admin/pages/Settings'
import ContractorHome from './Contractors/pages/ContractorHome'
import RequestWork from './Contractors/pages/RequestWork'
import WorkDone from './Contractors/pages/WorkDone'
import ProfileSettings from './Contractors/pages/ProfileSettings'
import History from './Contractors/pages/History'
import Notification from './users/Pages/Notification'
import AddProjects from './Admin/pages/AddProjects'


function App() {
  

  return (
    <>
     <Routes>
      {/* User Part */}
      <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/howitwork' element={<HowItWorks/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/viewproject/:id' element={<ViewProject/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='notification' element={<Notification/>}/>
        {/* Admin Part */}
        <Route path='/adminhome' element={<AdminHome/>}/>
        <Route path='/work' element={<WorkRequest/>}/>
        <Route path='/contractors' element={<Contractors/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/addproject' element={<AddProjects/>}/>
        {/* Contractor Part */}
        <Route path='/conhome' element={<ContractorHome/>}/>
        <Route path='/reqwork' element={<RequestWork/>}/>
        <Route path='/done' element={<WorkDone/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/profilesettings' element={<ProfileSettings/>}/>

        <Route path='*' element={<PageNotFound/>}/>
     </Routes>
    </>
  )
}

export default App
