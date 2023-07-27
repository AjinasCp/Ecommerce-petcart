import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { myContext } from "./Context";
import './Signup.css';

function Signup() {
  const { user, setUser } = useContext(myContext);
  const nameRef = useRef({});
  const passwordRef = useRef({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = nameRef.current.value;
    const passwordValue = passwordRef.current.value;
    setUser([
      ...user,
      { name: nameValue, password: passwordValue, id: Date.now() },
    ]);
    navigate("/Login");
    console.log(user);
  };
  return (
    <div className="signup-container">
      <h2>SIGNUP</h2>
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;