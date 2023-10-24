import React, { useState } from 'react';
import './dashboard.css';
import bcrypt from "bcryptjs-react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [condition, setCondition] = useState(false);


  const myPassword = process.env.REACT_APP_PASSWORD;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(myPassword, salt);
  const enteredPassword = bcrypt.hashSync(password,salt);
  
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (username === process.env.REACT_APP_USERNAME && enteredPassword === hashedPassword) {
        const response = await fetch('http://localhost:5000/dashboard');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUsers(data);
        setCondition(true);
      }
      else{
        toast.error('Enter valid email and password');
      }
    } catch (error) {
      toast.warning('Try Again');
    }
  };
  

  return (
    <div className='dashboard'>
      <div className="heading">
      <h1>Dashboard</h1>
      </div>
      <form className="dashboard_input" onSubmit={(e) => onSubmit(e)}>

        <h3>Log In (Only For Admin)</h3>
        <div className="dashboard_input_name">
        <p>Name: </p>
        <input 
        value={username}
        onChange={event => {setUsername(event.target.value)}}
        type="text" 
        placeholder='Enter name' />
        </div>
        <div className="dashboard_input_password">
          <p>Password: </p>
        <input 
        type="password"
          placeholder='Password Here' 
          
        value={password}
        onChange={event => {setPassword(event.target.value)}}
          />
        </div>
        <button>Submit</button>
      </form>
      <div className="dashboard_table">
        {condition === true && username === process.env.REACT_APP_USERNAME && enteredPassword === hashedPassword ? (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
        ): (
          <h2 style={{textAlign:"center",textDecoration:"underline"}}>Only for Admin </h2>
        )}
      </div>
    </div>
  );
};

export default Dashboard;