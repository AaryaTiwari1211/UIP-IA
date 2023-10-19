import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, ButtonBase, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import BusinessIcon from '@mui/icons-material/Business';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import AttractionsIcon from '@mui/icons-material/Attractions';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import PollIcon from '@mui/icons-material/Poll';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

import useMediaQuery from '@mui/material/useMediaQuery';
import logo from '../assets/logo.png'

const SidebarArticle = ({open , setOpen}) => {
    const lg = useMediaQuery('(min-width:1024px)')
    const ListItemer = ({ text, icon }) => {
        return (
            <ListItem disablePadding sx={{
                padding: '10px 20px',
            }}>
                <ButtonBase style={{ width: '100%' }} sx={{
                    padding: '5px 10px',
                }}>
                    <ListItemIcon sx={{
                        color: 'white',
                    }}>
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={text} sx={{
                        color: 'white',
                    }} />
                </ButtonBase>
            </ListItem>
        );
    }

    const drawerContent = (
        <div style={{
            marginTop: '60px',
        }}>
            <img src={logo} alt="Logo" style={{
                padding: '10px',
            }} />
            <List>
                <ListItemer text="Home" icon={<HomeIcon />} />
                <ListItemer text="Trending" icon={<WhatshotIcon />} />
                <ListItemer text="Entertainment" icon={<AttractionsIcon />} />
                <ListItemer text="Sports" icon={<SportsGymnasticsIcon />} />
                <ListItemer text="Lifestyle" icon={<NightlifeIcon />} />
                <ListItemer text="Business" icon={<BusinessIcon />} />
                <ListItemer text="Politics" icon={<PollIcon />} />
                <ListItemer text="Technology" icon={<SyncAltIcon />} />
            </List>
        </div>
    );

    return (
        <div>
            <Drawer
                variant={!lg ? 'temporary' : 'permanent'}
                open={!lg ? open : true}
                onClose={() => setOpen(false)}
                sx={{
                    '& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper':{
                        backgroundColor: '#1e1e1e',
                    },
                    '& .css-4t3x6l-MuiPaper-root-MuiDrawer-paper':{
                        backgroundColor: '#1e1e1e',
                    }
                }}
            >
                {drawerContent}
            </Drawer>
        </div>
    );
}

export default SidebarArticle;