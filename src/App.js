
import Admin from './Admin';
import './App.css';
import Manager from './Manager';
import User from './User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
          <Route path='/User' element={<User></User>}></Route>
          <Route path='/Admin' element={<Admin></Admin>}></Route>
          <Route path='/Manager' element={<Manager></Manager>}></Route>
        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;
