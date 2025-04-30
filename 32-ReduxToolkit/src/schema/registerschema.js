import * as yup from 'yup';

export let registerSchema = yup.object().shape({
  name: yup.string().min(3, 'Name should be at least 3 characters').required('Name is required'),
  username: yup.string().lowercase('Username should be in lowercase').required('Username is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().required('Password is required').matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/, 
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special"
  ),
  confirmpassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required')
});
