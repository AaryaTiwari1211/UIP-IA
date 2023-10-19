import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import jhaad from '../assets/galleryjhaad.svg';
import { useScrollTrigger, Slide } from '@mui/material';
import { Height } from '@mui/icons-material';
import { Link } from 'react-router-dom';


function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 0,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};



const drawerWidth = 300;
const navItems = ['FIND ART', 'COLLECTIBLE DESIGN', 'FOR TRADE', 'ART CONSULTANCY'];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} className='text-penk' sx={{ textAlign: 'center', background: 'transparent', Height: '100vh' }}>
            <Typography variant="h4" sx={{ my: 2, fontFamily: 'lora' }}>
                UIP IA
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (

                    <ListItem key={item} disablePadding>
                        <Link to='/article'>
                            <ListItemButton sx={{ textAlign: 'center', py: '2rem', fontFamily: 'lora' }}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{
            display: 'flex',
            backgroundColor: '#000000',
        }}>
            <img src={jhaad} alt="jhaad" className='hidden md:block md:w-[30rem]' />
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar component="nav" sx={
                    {
                        background: 'transparent',
                        boxShadow: 'none',
                    }
                }>
                    <Toolbar className='hidden'>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >

                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Link to='/article'>
                                    <Button key={item} sx={{ color: '#FFD8D8', fontSize: '1.5rem', mx: '1rem' }} size='lg'>
                                        {item}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            backgroundColor: 'rgba(34, 18, 14, 0.9)',
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ p: 3 }} className='hidden lg:block'>
                <Toolbar />
                <Typography variant='h1' className='text-penk text-center' sx={{
                    fontFamily: "Lora",
                }}>
                    Transforming spaces with Art and Design
                </Typography>
            </Box>
            <Box component="main" sx={{ p: 3 }} className='lg:hidden'>
                <Toolbar />
                <Typography variant='h4' className='text-penk text-center' sx={{
                    fontFamily: "Lora",
                }}>
                    Transforming spaces with Art and Design
                </Typography>
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;