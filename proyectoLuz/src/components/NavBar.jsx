import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer,Link  } from '@mui/material';
const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={()=>setIsDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor='left' open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}>
          <Box p={2} width='250px' textAlign='left' role='presentation'>
          <Typography variant="h6" component="div" >
            <h1>Menú</h1>
            <h2><Link href=''>Logout</Link></h2>
            <Button variant='contained' color='success'>Enviar correo</Button>
          </Typography> 
          </Box>
        </Drawer>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
        </Typography> 
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default NavBar