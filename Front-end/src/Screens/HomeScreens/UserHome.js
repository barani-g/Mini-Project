
import React, { useEffect, useState } from 'react';
import {useLocation, Link, useNavigate} from 'react-router-dom';


function UserHome() {
    const location = useLocation();
    const UserDetails = location.state;
  return (
    <div >
        <div class="flex flex-col items-start mt-40 ml-40 ">
            <span class="text-2xl"> Welcome 
                <span class="font-bold"> {UserDetails.username}</span>
            </span>
        </div>
        
        <div class="flex flex-col items-center mt-6">
                <h1 class="text-3xl font-bold mb-10">Pick Restaurant </h1>

                {/* Button Layout */}
                <div class="flex gap-10">
                {/* Restaurant 1 Button */}
                <Link to="/UserRestaurantHome">
                <div class="relative shadow-lg font-bold text-2xl">
                    <img src={require("/Users/gnaneshwaran/Documents/GitProjects/Mini-Project/my-app/Front-end/src/Images/Arasan.jpg")} class="rounded-lg w-[400px] h-[300px]"></img>
                    <h1 class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Arasan</h1>
                </div>
                </Link>

                {/* Restaurant 2 Button */}
                <div class="relative shadow-lg font-bold text-2xl">
                    <img src={require("/Users/gnaneshwaran/Documents/GitProjects/Mini-Project/my-app/Front-end/src/Images/Darling.jpg")} class="rounded-lg w-[400px] h-[300px]"></img>
                    <h1 class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Darling</h1>
                </div>
                
                </div>
                
                
        </div>
            
    </div>
  )
}

export default UserHome