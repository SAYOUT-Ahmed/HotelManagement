import "./css/file.css"
import AddRoom from './components/room/AddRoom'
import ExistingRooms from './components/room/ExistingRooms'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/home/Home'
import EditRoom from './components/room/EditRoom'
import NavBar from "./components/layout/NavBar.jsx";
import Footer from "./components/layout/Footer.jsx";
import RoomListing from "./components/room/RoomListing.jsx";
import Admin from "./components/admin/Admin.jsx";

function App() {


  return (
      <>
      <main>
        <Router>
            <NavBar/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/edit-room/:roomId' element={<EditRoom/>} />
              <Route path='/existing-rooms' element={<ExistingRooms/> } />
              <Route path='/add-rooms' element={<AddRoom/> } />
              <Route path='/add-room' element={<AddRoom/>}/>
              <Route path='/browse-all-rooms' element={<RoomListing/>}/>
              <Route path='/admin' element={<Admin/>}/>
          </Routes>
        </Router>
          <Footer/>
      </main>

        
      </>     
  )
}

export default App
