import './App.css';

// Import Screens
import RestaurantLogin from './Screens/RestaurantLogin';
import UserLogin from './Screens/UserLogin';
import Home from './Screens/Home';
import AdminLogin from './Screens/AdminLogin';

//Import React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      {/* Defining Routes URL and Components */}
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/User' element={<UserLogin></UserLogin>}></Route>
          <Route path='/Restaurant' element={<RestaurantLogin></RestaurantLogin>}></Route>
          <Route path='/Admin' element={<AdminLogin></AdminLogin>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;