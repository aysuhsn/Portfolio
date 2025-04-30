import { Button, TextField } from '@mui/material';
import style from './Register.module.css';
import React from 'react';
import axios from "axios";
import { useFormik } from 'formik';
import { registerSchema } from '../../schema/registerschema';
import { Link, useNavigate } from 'react-router-dom'; 
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
      try {
        const res = await axios.get("http://localhost:3000/users");
        const existingUser = res.data.find(
          user =>
            user.username === values.username || user.email === values.email
        );

        if (existingUser) {
          toast.error("Username or Email already exists!");
          return;
        }

        await axios.post("http://localhost:3000/users", values);
        resetForm();
        toast.success("Registration completed successfully.");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } catch (error) {
        toast.error("An error occurred. Please try again later.");
        console.error(error);
      }
    },
    validationSchema: registerSchema,
  });

  const { name, username, email, password, confirmpassword } = values;

  const inputStyle = {
    input: { color: 'white' },
    label: { color: 'white' },
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: 'white' },
      '&:hover fieldset': { borderColor: 'white' },
      '&.Mui-focused fieldset': { borderColor: 'white' }
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <h1>Register</h1>
      
      <TextField 
        name='name'
        label="Name" 
        variant="outlined"
        value={name} 
        onChange={handleChange}
        error={Boolean(errors.name)} 
        helperText={errors.name}
        sx={inputStyle}
      />
      
      <TextField 
        name='username'
        label="UserName" 
        variant="outlined" 
        value={username}
        onChange={handleChange}
        error={Boolean(errors.username)} 
        helperText={errors.username}
        sx={inputStyle}
      />
      
      <TextField 
        name='email'
        label="Email" 
        variant="outlined" 
        value={email}
        onChange={handleChange}
        error={Boolean(errors.email)} 
        helperText={errors.email} 
        sx={inputStyle}
      />
      
      <TextField
        name='password'
        label="Password"
        type="password"
        value={password}
        onChange={handleChange}
        error={Boolean(errors.password)} 
        helperText={errors.password} 
        sx={inputStyle}
      />
      
      <TextField
        name='confirmpassword'
        label="Confirm Password"
        type="password"
        value={confirmpassword}
        onChange={handleChange}
        error={Boolean(errors.confirmpassword)} 
        helperText={errors.confirmpassword}
        sx={inputStyle}
      />
      <p>Already have an account? <Link style={{color:'blue', borderBottom:'1px solid blue'}} to={"/login"}>Login</Link></p>
      <Button variant="contained" type='submit' style={{background:'green'}}>Sign Up</Button>
      <ToastContainer />
    </form>
  );
}

export default Register;
