
import React, { useEffect, useState } from 'react';
import {useLocation, Link, useNavigate} from 'react-router-dom';


function UserHome() {
    const location = useLocation();
    const UserDetails = location.state;
  return (
    <div >
        <div class="flex flex-col items-start m-40 ">
            <span class="text-2xl"> Welcome 
                <span class="font-bold"> {UserDetails.username}</span>
            </span>
        </div>
        
        <div class="flex flex-col min-h-screen items-center mt-40">
            <ul>
                <h1 class="text-3xl font-bold mb-10">Pick Restaurant </h1>
                    <Link to="/UserRestaurantHome">
                    <li class="p-10 rounded-lg text-white bg-mypurple shadow-lg font-bold text-2xl">Arasan</li>
                    </Link>
                </ul>
        </div>
            
    </div>
  )
}

export default UserHome