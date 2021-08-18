import React from 'react'
import { makeStyles, Typography, Drawer, CardMedia, Card, List, ListItem } from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import FolderIcon from '@material-ui/icons/Folder';
import logo from '../assets/images/logo.png'
import { useHistory, useLocation } from 'react-router'
import { AppBar, Toolbar, IconButton, Button, Avatar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import clsx from 'clsx';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const drawerWidth = 200

const useStyles = makeStyles((theme) => {
    return {
        page: {
            width: '100%',
            backgroundColor: '#f9f9f9',
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        pageShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: 0,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
            border: 'none'
        },
        media: {
            height: 50,
            width: 50,
            borderRadius: '5px'
        },
        logo: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: theme.spacing(3),
            boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px'
        },
        root: {
            display: 'flex'
        },
        icon: {
            minWidth: '40px'
        },
        listText: {
            fontSize: '1.5rem',
        },
        list: {
            margin: '1rem 0',
            borderTopRightRadius: '2rem',
            borderBottomRightRadius: '2rem',
            paddingTop: '5px',
            paddingBottom: '5px',
        },
        appBar: {
            boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px',
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px',
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        toolbar: theme.mixins.toolbar,
        active: {
            backgroundColor: '#cfe2ff',
            margin: '1rem 0',
            borderTopRightRadius: '2rem',
            borderBottomRightRadius: '2rem',
            paddingTop: '5px',
            paddingBottom: '5px',
        },
        logout: {
            width: 120,
            margin: 'auto',
            fontSize: '1.5rem'
        },
        blue: {
            color: '#fff',
            backgroundColor: '#084298',
            cursor: 'pointer'
        },
        simpleMenu: {
            top: '43px!important',
            boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px'
        },
        menuItem: {
            fontSize: '1.7rem',
            color: theme.palette.secondary.main
        }
    }
})

const Dashboard = ({ children }) => {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    const username = localStorage.getItem('userName') || 'Ncuti'

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(true);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const menuItems = [
        {
            text: 'Home',
            path: '/home'
        },
        {
            text: 'Users',
            path: '/users'
        },
        {
            text: 'Shops',
            path: '/shops'
        },
        {
            text: 'Products',
            path: '/products'
        },
    ]

    return (
        <div className={classes.root}>
            <AppBar
                color="inherit"
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <div style={{ flexGrow: 1 }}>
                        <IconButton edge="start" onClick={open ? handleDrawerClose : handleDrawerOpen}>
                            <MenuIcon style={{ fontSize: '20px' }} />
                        </IconButton>
                    </div>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <Avatar className={classes.blue}>{username[0].toUpperCase()}</Avatar>
                    </Button>
                    <Menu
                        className={classes.simpleMenu}
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem className={classes.menuItem} onClick={handleClose}>Profile</MenuItem>
                        <MenuItem className={classes.menuItem} onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{ paper: classes.drawerPaper }}
            >
                <Card className={classes.logo}>
                    <CardMedia
                        className={classes.media}
                        image={logo}
                        title="Paella dish"
                    />
                    <Typography variant="h4" align="center" className="mt-4" color="primary">
                        Magaze Online System
                    </Typography>
                </Card>

                <List style={{ paddingRight: '1rem', flexGrow: .1 }}>
                    {menuItems.map(item => (
                        <ListItem button
                            onClick={() => history.push(item.path)}
                            key={item.text}
                            className={location.pathname === item.path ? classes.active : classes.list}>
                            <ListItemIcon className={classes.icon}><FolderIcon color="primary" style={{ fontSize: '20px' }} /></ListItemIcon>
                            <div className={classes.listText} >{item.text}</div>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div className={clsx(classes.page, {
                [classes.pageShift]: open,
            })}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}

export default Dashboard
