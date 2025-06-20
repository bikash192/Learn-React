import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const LoginForm = () => {
  const navigate=useNavigate();
    const [formData,setFormData]=useState({
        username:"",
        password:""
    });
    const [errors,setErrors]=useState({});
    const [message,setMessage]=useState(null);
    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setFormData({
            ...formData,
            [name]:value
        });
    }
    const validate=()=>{
        let newErrors={};
        let isValid=true;
        if(formData.username.length===0){
            isValid=false;
            newErrors.username="Username is mandatory";
        }
        if(formData.password.length===0){
          isValid=false;
            newErrors.password="Password is mandatory";
        }
        setErrors(newErrors);
        return isValid;
    }
    const handleSubmit= async(e)=>{
      e.preventDefault();
      if(validate()){
        // if(formData.username==='admin'&&formData.password==='admin'){
        //   setMessage('Valid Credentials');
        //   navigate ('/Dashboard');

        // }
        // else{
        //   setMessage('Invalid Credentials');
        // }
        const body={
          username:formData.username,
          password:formData.password
        };
        const configuration={
          withCredentials:true
        }
        try{
            const response=await axios.post('http://localhost:5000/auth/login',body,configuration)
          console.log(response);
        }
        catch(error){
            setErrors({messagae:"Login failed,please check your credentials"});
        }
        
      }
    }
  return (
    <div className="container text-center">
      {message&&(message)}
      <h1>Login Page</h1>
      {errors}
      <form onSubmit={handleSubmit}>
        <>
        <label>Username:</label>
        <input type="text" name="username" value ={formData.username} onChange ={handleChange}placeholder="Enter your username" />
        {errors.username &&(errors.username)}
        </>
        <>
        <label>Password :</label>
        <input type="password" name="password" value={formData.password}
        onChange={handleChange} placeholder='Enter your password'
        />
        {errors.password&&(errors.password)}
        </>
      <div>
        <button>Submit</button>
        </div>     
      </form>
    </div>
  )
}

export default LoginForm

