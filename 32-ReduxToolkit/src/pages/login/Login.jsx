import React from 'react';
import style from './Login.module.css';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import { loginSchema } from '../../schema/loginschema';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css'; 

const Login = () => {
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit, errors, resetForm } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        const res = await axios.get("http://localhost:3000/users");
        const foundUser = res.data.find(
          user => user.username === values.username && user.password === values.password
        );
    
        if (foundUser) {
          await axios.patch(`http://localhost:3000/users/${foundUser.id}`, {
            isLogined: true,
          });
    
          const updatedUser = { ...foundUser, isLogined: true };
          localStorage.setItem("loggedUser", JSON.stringify(updatedUser));
    
          toast.success("Login Successfully");
          resetForm();
          setTimeout(() => {
            navigate('/');
          }, 1000);
        } else {
          toast.error("Username or password is incorrect.!");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again later.");
        console.error(error);
      }
    }
    
  });

  const { username, password } = values;

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
      <h1>Login</h1>

      <TextField 
        name="username"
        label="UserName" 
        variant="outlined" 
        value={username}
        onChange={handleChange}
        error={Boolean(errors.username)} 
        helperText={errors.username} 
        sx={inputStyle}
      />
      
      <TextField
        name="password"
        label="Password"
        type="password"
        value={password}
        onChange={handleChange}
        error={Boolean(errors.password)} 
        helperText={errors.password} 
        sx={inputStyle}
      />

      <p>Don't have an account? <Link style={{color:'blue', borderBottom:'1px solid blue'}} to={"/register"}>Sign Up</Link></p>
      <Button variant="contained" type="submit" style={{ background: 'green' }}>Sign In</Button>
      <ToastContainer />
    </form>
  );
}

export default Login;
