import { Button, TextField } from '@mui/material';
import style from './Register.module.css';
import React from 'react';
import axios from "axios";
import { useFormik } from 'formik';
import { registerSchema } from '../../schema/registerschema';
import { useNavigate } from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate(); 
  const { values, handleChange, handleSubmit, errors, resetForm } = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: '',
      confirmpassword: '',
      isLogined: false,
    },
    onSubmit: async (values) => {
      await axios.post("http://localhost:3000/users", values);
      toast.success("Register Succesfully")
      setTimeout(() => {
        resetForm();
        navigate("/login");  
      }, 1000);
    },
    validationSchema: registerSchema,
  });

  const { name, username, email, password, confirmpassword } = values;

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <h1>Register</h1>
      
      <TextField 
        name='name'
        id="outlined-basic" 
        label="Name" 
        variant="outlined"
        value={name} 
        onChange={handleChange}
        error={Boolean(errors.name)} 
        helperText={errors.name}
      />
      
      <TextField 
        name='username'
        id="outlined-basic" 
        label="UserName" 
        variant="outlined" 
        value={username}
        onChange={handleChange}
        error={Boolean(errors.username)} 
        helperText={errors.username}
      />
      
      <TextField 
        name='email'
        id="outlined-basic" 
        label="Email" 
        variant="outlined" 
        value={email}
        onChange={handleChange}
        error={Boolean(errors.email)} 
        helperText={errors.email} 
      />
      
      <TextField
        name='password'
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={handleChange}
        error={Boolean(errors.password)} 
        helperText={errors.password} 
      />
      
      <TextField
        name='confirmpassword'
        id="outlined-password-input"
        label="Confirm Password"
        type="password"
        autoComplete="current-password"
        value={confirmpassword}
        onChange={handleChange}
        error={Boolean(errors.confirmpassword)} 
        helperText={errors.confirmpassword}
      />
      
      <Button variant="contained" type='submit'>Sign Up</Button>
      <ToastContainer/>
    </form>
  );
}

export default Register;
