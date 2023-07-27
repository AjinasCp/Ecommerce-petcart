
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { myContext } from "./Context";
import { Link } from "react-router-dom";

function Login() {
  const { user, setLogin} = useContext(myContext);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (nameValue, passwordValue) => {
    if (isAdmin) {
      if (nameValue === "admin" && passwordValue === "admin123") {
        setLogin(true);
        navigate("/Adminproduct");
        alert("Admin Login successful");
      } else {
        alert("Invalid admin username or password");
      }
    } else {
      const getUser = user.find((user) => user.name === nameValue);
      if (getUser && getUser.password === passwordValue) {
        setLogin(true);
        navigate("/");
        alert("User Login successful");
      } else {
        alert("Invalid username or password");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = nameRef.current.value;
    const passwordValue = passwordRef.current.value;

    handleLogin(nameValue, passwordValue);
  };

  return (
    <div className="login-container">
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" ref={nameRef} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" ref={passwordRef} />
        </label>
        <br />
        <div>
          <label>
            <input
              type="radio"
              checked={!isAdmin}
              onChange={() => setIsAdmin(false)}
            />
            User Login
          </label>
          <label>
            <input
              type="radio"
              checked={isAdmin}
              onChange={() => setIsAdmin(true)}
            />
            Admin Login
          </label>
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
      <div>
        <h6>
          <Link to="/Signup">Signup</Link>
        </h6>
      </div> 
    </div>
  );
}

export default Login;




































































































































































































































// import React, {useContext, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";
// import { myContext } from "./Context";
// import { Link } from "react-router-dom";

// function Login() {
//   const { user,setLogin,login } = useContext(myContext);
//   const nameRef = useRef(null);
//   const passwordRef = useRef(null);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const nameValue = nameRef.current.value;
//     const passwordValue = passwordRef.current.value;

//     const getUser = user.find((user) => user.name === nameValue);
//     console.log(login);

//     const loginMessage = getUser && getUser.password === passwordValue
//     ? (setLogin(true), console.log(login), navigate("/"), "Login successful")
//     : "Invalid username or password";
  
//   alert(loginMessage);
  


//   };

//   return (
//     <div className="login-container">
//       <h2>LOGIN</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input type="text" ref={nameRef} />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" ref={passwordRef} />
//         </label>
//         <br />
//         <button type="submit">Login</button>
//       </form>
//       <div>
//   <h6>
//     <Link to="/Signup">Signup</Link>
//   </h6>
// </div>
//     </div>
//   );
// }

// export default Login;