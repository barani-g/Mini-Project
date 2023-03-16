import React, { useEffect, useState } from 'react';
import {useLocation, Link, useNavigate} from 'react-router-dom';

import SearchImg from '../../Icons/Search.svg';
import MenuImg from '../../Icons/Menu-b.svg';
import OrderImg from '../../Icons/Order-b.svg';
import LogoutImg from '../../Icons/Logout.svg';




function UserHome() {
  const location = useLocation();
  const UserDetails = location.state;

  //Navigate
  const navigate = useNavigate();


  const handleLogout = (e) => {
    navigate('/');
  }  
  return (
    <div>
      UserHome
      <div>{UserDetails.username}</div>

      {/* Side Bar */}
      <span
      class="absolute text-white text-4xl top-5 left-4 cursor-pointer"
      onclick="openSidebar()"
    >
      <i class="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
    </span>
    <div
      class="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-white shadow-lg"
    >
      <div class="text-black text-xl">
        <div class="p-2.5 mt-1 flex items-center">
          <h1 class="font-bold text-black text-3xl ml-3">Arasan</h1>
        </div>
        <div class="my-2 bg-gray-600 h-[1px]"></div>
      </div>
      <div
        class="mt-5 p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-black text-white"
      >
        <img class="aspect-square" src={SearchImg} />
        <input
          type="text"
          placeholder="Search"
          class="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
        />
      </div>
      <div
        class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-mypurple text-black hover:text-white "
      >
        <img class="aspect-square " src={MenuImg} />
        <span class="text-[15px] ml-4 font-bold">Menu</span>
      </div>
      <div
        class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-mypurple text-black hover:text-white"
      >
        <img class="aspect-square " src={OrderImg} />
        <span class="text-[15px] ml-4 font-bold">Order</span>
      </div>
      <div class="my-4 bg-gray-600 h-[1px]"></div>
      
      
      <button
        class="p-2.5 mt-3 flex w-full items-center rounded-md px-4 duration-300 hover:bg-mypurple text-black hover:text-white"
        onClick={handleLogout}
      >
        <img class="aspect-square " src={LogoutImg} />
        <span class="text-[15px] ml-4 font-bold">Logout</span>
      </button>
      
    </div>
      </div>
      
  )
}

export default UserHome