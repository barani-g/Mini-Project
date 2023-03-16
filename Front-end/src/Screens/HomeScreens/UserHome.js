import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';




function UserHome() {
  const location = useLocation();
  const UserDetails = location.state;

  return (
    <div>
      UserHome
      <div>{UserDetails.username}</div>
      </div>
  )
}

export default UserHome