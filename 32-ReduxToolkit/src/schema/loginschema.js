import * as yup from 'yup';

export let loginSchema = yup.object().shape({
  username: yup.string()
    .lowercase('Username should be in lowercase')
    .min(3, 'Username should be at least 3 characters')
    .required('Username is required'),
  password: yup.string()
    .required('Password is required')
});
