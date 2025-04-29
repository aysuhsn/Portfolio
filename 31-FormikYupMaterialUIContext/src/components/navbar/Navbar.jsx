import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

const drawerWidth = 240;

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function DrawerAppBar(props) {
  const navigate = useNavigate();
  const { window } = props;

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setMobileOpen(false);
    handleMenuClose();
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleNavigate(item.path)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="static"
        component="nav"
        sx={{
          backgroundColor: '#002B5B', 
          height: '48px', 
          justifyContent: 'center',
        }}
      >
        <Toolbar sx={{ minHeight: '48px', padding: '0 16px' }}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: 'none' } }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              fontSize: '18px',
            }}
          >
            MUI
          </Typography>

          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              gap: 1, // boşluğu azaldırıq
              alignItems: 'center',
              marginRight: 1,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                sx={{
                  color: '#fff',
                  fontSize: '14px',
                  textTransform: 'none',
                  padding: '4px 8px',
                  minWidth: 'auto',
                }}
                onClick={() => handleNavigate(item.path)}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <IconButton
            onClick={handleMenuClick}
            size="small"
            edge="end"
            color="inherit"
          >
            <AccountCircle fontSize="medium" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {isLoggedIn ? (
              <MenuItem onClick={() => handleNavigate('/logout')}>Logout</MenuItem>
            ) : (
              <>
                <MenuItem onClick={() => handleNavigate('/register')}>Register</MenuItem>
                <MenuItem onClick={() => handleNavigate('/login')}>Login</MenuItem>
              </>
            )}
          </Menu>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
