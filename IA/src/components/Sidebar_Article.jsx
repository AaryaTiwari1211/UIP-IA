import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Box, useMediaQuery } from '@mui/material'
import logo from '../assets/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import { Home } from '@mui/icons-material';

const SidebarArticle = () => {
    return (
        <div className='bg-[#1e1e1e]'>
            <Box sx={{
                backgroundColor: '#1e1e1e !important',
                height: '100vh',
                position: 'fixed',
                '& .css-ewdv3l': {
                    display: 'flex !important',
                    flexDirection: 'column !important',
                    gap: '10px !important',
                },
                '& .css-1wvake5': {
                    border: 'none !important',
                    boxShadow: 'none !important',
                },
                '& .ps-menuitem-root': {
                    backgroundColor: '#1e1e1e !important',
                    fontFamily: 'var(--font)',
                    color: '#FFFFFF !important',
                    transitionProperty: 'all !important',
                    transitionDuration: '0.15s !important',
                    transitionTimingFunction: 'ease-in-out !important',
                },
                "& .ps-menuitem-root:hover": {
                    color: `#000000 !important`,
                    backgroundColor: `#FFFFFF !important`,
                },
                
            }}>
                <Sidebar>
                    <Menu className='bg-[#1e1e1e]'>
                        <Box className="flex justify-center w-full py-4">
                            <img src={logo} alt="logo" className='' />
                        </Box>
                        <MenuItem icon={<HomeIcon sx={{color: 'white',}} />} className='uppercase'> Home </MenuItem>
                        <MenuItem icon={<HomeIcon sx={{color: 'white',}} />} className='uppercase'> Trending </MenuItem>
                        <MenuItem icon={<HomeIcon sx={{color: 'white',}} />} className='uppercase'> Entertainment </MenuItem>
                        <MenuItem icon={<HomeIcon sx={{color: 'white',}} />} className='uppercase'> Sports </MenuItem>
                        <MenuItem icon={<HomeIcon sx={{color: 'white',}} />} className='uppercase'> Lifestyle </MenuItem>
                        <MenuItem icon={<HomeIcon sx={{color: 'white',}} />} className='uppercase'> Business </MenuItem>
                        <MenuItem icon={<HomeIcon sx={{color: 'white',}} />} className='uppercase'> Politics </MenuItem>
                        <MenuItem icon={<HomeIcon sx={{color: 'white',}} />} className='uppercase'> Corruption </MenuItem>
                        <MenuItem icon={<HomeIcon sx={{color: 'white',}} />} className='uppercase'> Technology </MenuItem>
                    </Menu>
                </Sidebar>
            </Box>
        </div>
    )
}

export default SidebarArticle