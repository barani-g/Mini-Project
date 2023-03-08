import React, { useEffect, useState } from 'react'
import axios from 'axios';


function UserHome() {

  const url = 'http://localhost:8000/users/63f9781b8b9e71cc6b00991c';
  const [UserDetails, setDetails] = useState([]);

  useEffect(() => {
    axios.get(url)
    .then(res => {
      setDetails(res.data.username);
    })
    .catch(err => {
      alert("Something went wrong!");
    })
  }, [])

  return (
    <div>
      UserHome
      <div>{UserDetails}</div>
      </div>
  )
}

export default UserHome