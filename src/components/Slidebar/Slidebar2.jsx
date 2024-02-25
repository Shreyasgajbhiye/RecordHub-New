import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import './Slidebar.css'


import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
const Slidebar = () => {

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    const list = (anchor) => (
        
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className="bottom">
            <List>
            <div className='top'>
                <span className='logo'>RecordHub</span>
            </div>
            <hr/>
            <p className='title'>MAIN</p>
                <ListItem disablePadding>
                    <ListItemButton >
                        <ListItemIcon >
                            <SpaceDashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Dashboard"} className='name' />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Person2OutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Batch"}  className='name' />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <GroupOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Students"} className='name'  />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
                <p className='title'>Logout</p>
            <List disablePadding>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <LoginOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Logout"} className='name' />
                    </ListItemButton>
                </ListItem>
            </List>
            </div>
        </Box>
    );

    return (

        <div className='Navbar' >
            <MenuIcon style={{height:"40px"}}
                onClick={
                    toggleDrawer("left", true)
                }
            />

            <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
            >
                {list("left")}
            </Drawer>

        </div>
    )
}

export default Slidebar