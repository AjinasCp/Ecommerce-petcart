import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';


function Sidebar() {
const navigate=useNavigate()
  return (
    <div className="sidebar">
      <h2 className="sidebar-heading">ADMIN</h2>
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link to="/Adminproduct">PRODUCTS</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/Addproduct">ADD PRODUCT</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/Adminuser">USERS</Link>
        </li>
      </ul>
      <div className='adminlogout'>
      <button onClick={()=>navigate('/Login')}>logout</button>
    </div>
    </div>
    
  );
}

export default Sidebar;