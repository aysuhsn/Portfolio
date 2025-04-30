import * as React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Wrapper() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(!!localStorage.getItem("loggedUser"));
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const goToRegister = () => {
    navigate('/register');
    handleClose();
  };

  const goToLogin = () => {
    navigate('/login');
    handleClose();
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    setIsLoggedIn(false);
    handleClose();
  };

  React.useEffect(() => {
    const checkUser = localStorage.getItem("loggedUser");
    setIsLoggedIn(!!checkUser);
  }, []);

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color='inherit'
      >
        <AccountCircleIcon fontSize='large'/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {isLoggedIn ? (
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        ) : (
          <>
            <MenuItem onClick={goToRegister}>Register</MenuItem>
            <MenuItem onClick={goToLogin}>Login</MenuItem>
          </>
        )}
      </Menu>
    </div>
  );
}
