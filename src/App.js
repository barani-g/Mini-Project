import './App.css';

// Import Screens
import Restaurant from './Screens/Restaurant';
import User from './Screens/User';
import Home from './Screens/Home';
import Admin from './Screens/Admin';

//Import React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      {/* Defining Routes URL and Components */}
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/User' element={<User></User>}></Route>
          <Route path='/Restaurant' element={<Restaurant></Restaurant>}></Route>
          <Route path='/Admin' element={<Admin></Admin>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;