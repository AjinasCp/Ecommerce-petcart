import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { useContext } from "react";
import "./Navbar.css";
import { myContext } from "./Context";

function HeaderNavbar() {
  const { setLogin, login, setCart } = useContext(myContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (login) {
      setLogin(false);
      setCart([]);
      alert("Logged out successfully");
    } else {
      alert("Please log in");
      navigate("/Login");
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <h2 className="navbar-logo">
            <Link to="/">peTCaRt</Link>
          </h2>
          <div className="navbar-links">
            <Link to="/">HOME</Link>
            <Link to="/dog">DOG</Link>
            <Link to="/cat">CAT</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/store">STORE</Link>
            {login ? (
              <>
                <Link to="/cart">
                  <img className="nav-img" src="/Images/shopping-cart.svg" alt="cart" />
                  CART
                </Link>
                <button className="logout-btn" onClick={handleLogout}>
                  <BiLogOutCircle />
                  LOGOUT
                </button>
              
              </>
            ) : (
              <>
                <Link to="/login">
                  <img className="nav-img" src="/Images/user.svg" alt="user" />
                  LOGIN
                </Link>
                <Link to="/cart">
                  <img className="nav-img" src="/Images/shopping-cart.svg" alt="cart" />
                  CART
                </Link>
               
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default HeaderNavbar;                                 
              





























































// import React from "react";
// import { Link,useNavigate } from "react-router-dom";
// import { BiLogOutCircle } from "react-icons/bi";
// import { useContext } from "react";
// import "./Navbar.css";
// import { myContext } from "./Context";


// function HeaderNavbar() {
//   const { setLogin,login,setCart } = useContext(myContext);
//   const navigate = useNavigate()


//   const handleLogout = () => {
//     if(login){
//     setLogin(false);
//     setCart([])
//     alert('logged out successfully')
//     }else{
//       alert("please log in")
//       navigate('/Login')
//     }
//   };

//   return (
    
//     <>

//     <nav className="navbar">
//       <div className="navbar-container">
//         <h2 className="navbar-logo">
//           <Link to="/">peTCaRt</Link>
//         </h2>
//         <div className="navbar-links">
//           <Link to="/">HOME</Link>
//           <Link to="/dog">DOG</Link>
//           <Link to="/cat">CAT</Link>
//           <Link to="/contact">CONTACT</Link>
//           <Link to="/store">STORE</Link>
//           <Link to="/login">
//             <img className="nav-img" src="/Images/user.svg" alt="user" />
//             LOGIN
//           </Link>
//           <Link to="/cart">
//             <img className="nav-img" src="/Images/shopping-cart.svg" alt="cart" />
//             CART
//           </Link>
//           <button className="logout-btn" onClick={handleLogout}>
//             <BiLogOutCircle />
//             LOGOUT
//           </button>
//           <Link to="/adminlogin">ADMIN</Link>
//         </div>
//       </div>
//     </nav>
//     </>
    
//   );
// }

// export default HeaderNavbar;