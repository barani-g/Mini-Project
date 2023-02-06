import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>Home Page </h1>
        <ul>
            <Link to="/Admin">
                <li>Admin</li>
            </Link>
            <Link to="/User">
                <li>User</li>
            </Link>
            <Link to="/Manager">
                <li>Manager</li>
            </Link>
            
        </ul>
        
    </div>
  )
}

export default Home