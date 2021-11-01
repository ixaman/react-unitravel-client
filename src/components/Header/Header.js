import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const {user, logout} = useAuth();

    return (
        <div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="logo-text">
              <Link to="/home"><h3 className="logo"><span className="logo-part">UNI</span>TRAVEL</h3></Link>
            </div>
          </div>
          <div className="col-md-10 ">
            <div className="menu-container ">
              <ul className="d-flex align-items-end justify-content-end">
                <NavLink to="/home"
                 className="items"
                 activeStyle={{
                  fontWeight: "600",
                  color: "blue"
                }}
                 >
                  <li>Home</li>
                </NavLink>
                <NavLink to="/myorder" 
                className="items"
                activeStyle={{
                  fontWeight: "600",
                  color: "blue"
                }}
                >
                  <li>My Orders</li>
                </NavLink>
                <NavLink to="/manageorder" 
                className="items"
                activeStyle={{
                  fontWeight: "600",
                  color: "blue"
                }}
                >
                  <li>Manae All Orders</li>
                </NavLink>
                <NavLink to="/addpackage" 
                className="items"
                activeStyle={{
                  fontWeight: "600",
                  color: "blue"
                }}
                >
                  <li>Add Packages</li>
                </NavLink>
                <NavLink to="/about" 
                className="items"
                activeStyle={{
                  fontWeight: "600",
                  color: "blue"
                }}
                >
                  <li>About</li>
                </NavLink>
                <NavLink to="/contact" 
                className="items"
                activeStyle={{
                  fontWeight: "600",
                  color: "blue"
                }}
                >
                  <li>Contact</li>
                </NavLink>
                { user.email && <span className="pb-3" style={{color: "black"}}>Hello, {user.displayName}</span>}
                <NavLink to="/login" 
                className="items"
                activeStyle={{
                  fontWeight: "600",
                  color: "blue"
                }}
                >                  
                  { user.email? <Link to="/home"><button  onClick={logout} className="btn btn-primary mt-3"> Sign out</button></Link>
                  : <button className="btn btn-primary mt-3">Sign In</button>}
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Header;