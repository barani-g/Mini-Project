
import React, { useEffect, useState } from 'react';
import {useLocation, Link, useNavigate} from 'react-router-dom';
import LogoutImg from '../../Icons/Logout.svg';


function UserHome() {
    const location = useLocation();
    const UserDetails = location.state;
    const navigate = useNavigate();

    const handleLogout = (e) => {
        navigate('/Role');
      }
  return (
    <div >
        <div class="flex justify-evenly mt-40 my w-full">
            <span class="text-2xl"> Welcome 
                <span class="font-bold"> {UserDetails.username}</span>
            </span>
            <button
                class="p-2.5 mt-3 flex w-40 items-center rounded-md px-4 duration-300 hover:bg-mypurple text-black hover:text-white"
                onClick={handleLogout}
            >
        <img class="aspect-square " src={LogoutImg} />
        <span class="text-[15px] ml-4 font-bold">Logout</span>
      </button>
        </div>
        
        <div class="flex flex-col items-center mt-6">
                <h1 class="text-3xl font-bold mb-10">Pick Restaurant </h1>

                {/* Button Layout */}
                <div class="flex gap-10">
                {/* Restaurant 1 Button */}
                <Link to="/UserRestaurantHome">
                <div class="relative rounded-lg hover:shadow-2xl hover:transform hover:scale-105 transition duration-300 ease-in-out ">
                    <img src={require("D:/MiniProject/Mini-Project/Front-end/src/Images/Arasan.jpg")} class="rounded-lg w-[400px] h-[300px]"></img>
                    <h1 class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">Arasan</h1>
                </div>
                </Link>

                {/* Restaurant 2 Button */}
                <div class="relative ">
                    <img src={require("D:/MiniProject/Mini-Project/Front-end/src/Images/Darling.jpg")} class="rounded-lg w-[400px] h-[300px]"></img>
                    <h1 class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">Darling</h1>
                </div>
                
                </div>
                
                
        </div>
            
    </div>
  )
}

export default UserHome