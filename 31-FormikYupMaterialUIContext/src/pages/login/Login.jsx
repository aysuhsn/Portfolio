import React from 'react';
import style from './Login.module.css';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import { loginSchema } from '../../schema/loginschema';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Login = () => {
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit, errors, resetForm } = useFormik({
    initialValues: {
      username: '',
      password: '',
      isLogined: true,
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      resetForm();
      toast.success("Login Successfully");

      setTimeout(() => {
        navigate('/');
      }, 1000); 
    }
  });

  const { username, password } = values;

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <h1>Login</h1>

      <TextField 
        name="username"
        id="outlined-basic" 
        label="UserName" 
        variant="outlined" 
        value={username}
        onChange={handleChange}
        error={Boolean(errors.username)} 
        helperText={errors.username} 
      />
      
      <TextField
        name="password"
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={handleChange}
        error={Boolean(errors.password)} 
        helperText={errors.password} 
      />

      <Button variant="contained" type="submit">Sign In</Button>
      <ToastContainer />
    </form>
  );
}

export default Login;
