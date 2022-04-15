import React, { useState } from "react";

import "./Form.css";

export default function Form1() {
  const [user, setUser] = useState({
    //object  {  }
    name: "",
    age: "",
    email: "",
    password: "",
  });
  const { name, age, email, password } = user; //destructering ###

  const onHandleForm = (e) => {
    console.log("Form Submitted");
    console.log(user);
    e.preventDefault(); //contain value in the console
  };

  const onChangeValue = (e) => {
    setUser({
      ...user, //spread operator to use this to add the value with previous inputs
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="main_div">
      <div>
        <h1>Registration Form</h1>
      </div>
      <div>
        <form action="" onClick={onHandleForm}>
          <div className="small_div">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={onChangeValue}
              required
            />
          </div>

          <div className="small_div">
            <label htmlFor="age"> Age: </label>
            <input
              type="number"
              name="age"
              id="age"
              value={age}
              onChange={onChangeValue}
              required
            />
          </div>

          <div className="small_div">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={onChangeValue}
              required
            />
          </div>

          <div className="small_div">
            <label htmlFor="pass">Password: </label>
            <input
              type="text"
              name="password"
              id="password"
              value={password}
              onChange={onChangeValue}
              required
            />
          </div>
          <div>
            <button type="submit"> Save User Info</button>
          </div>
        </form>
      </div>
    </div>
  );
}
