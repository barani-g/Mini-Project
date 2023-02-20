import React from 'react';

//Import Link 
import { Link } from 'react-router-dom';

//Import Images
import UserImg from '../../Icons/User_Icon.svg';
import AdminImg from '../../Icons/Admin_Icon.svg';
import RestaurantImg from '../../Icons/Restaurant_Icon.svg';

function Home() {
  return (

        // Grid
        <div class="grid grid-cols-3 ">

          {/* User */}
          <div class="flex justify-center bg-[#80489C] pt-56 pb-56">
          <Link to="/User">
            <div class="m-10 rounded-lg bg-white p-20 text-center hover:shadow-2xl transition duration-200 ease-in-out">
              <img class="mt-2 aspect-square" src={UserImg} />
              <div class="mt-10 text-lg font-bold">User</div>
            </div>
            </Link>
          </div>

          {/* Restaurant */}
          <div class="flex justify-center bg-[#FF8FB1] pt-56 pb-56">
            <Link to="/Restaurant">
            <div class="m-10 rounded-lg bg-white p-20 text-center hover:shadow-2xl transition duration-200 ease-in-out">
              <img class="aspect-square" src={RestaurantImg} />
              <div class="mt-10 text-lg font-bold">Restaurant</div>
            </div>
            </Link>
          </div>

          {/* Admin */}
          <div class="flex justify-center bg-[#FCE2DB] pt-56 pb-56">
          <Link to="/Admin">
            <div class="m-10 rounded-lg bg-white p-20 text-center hover:shadow-2xl transition duration-200 ease-in-out">
              <img class="aspect-square" src={AdminImg} />
              <div class="mt-10 text-lg font-bold">Admin</div>
            </div>
            </Link>
          </div>
        </div>

  )
}

export default Home