import './App.css';

// Import Screens
import RestaurantLogin from './Screens/LoginScreens/RestaurantLogin';
import UserLogin from './Screens/LoginScreens/UserLogin';
import Home from './Screens/HomeScreens/Home';
import AdminLogin from './Screens/LoginScreens/AdminLogin';
import UserHome from './Screens/HomeScreens/UserHome';
import RestaurantHome from './Screens/HomeScreens/RestaurantHome';
import AdminHome from './Screens/HomeScreens/AdminHome';

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
          <Route path='/UserHome' element={<UserHome></UserHome>}></Route>
          <Route path='/RestaurantHome' element={<RestaurantHome></RestaurantHome>}></Route>
          <Route path='/AdminHome' element={<AdminHome></AdminHome>}></Route>
          <Route path='/Admin' element={<AdminLogin></AdminLogin>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;