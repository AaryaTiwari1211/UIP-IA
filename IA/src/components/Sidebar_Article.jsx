import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Box, useMediaQuery } from '@mui/material'
import logo from '../assets/logo.png'

const SidebarArticle = () => {
    return (
        <Box sx={{
            backgroundColor: '#1e1e1e !important',
            height: '100vh',
            '& .css-ewdv3l': {
                display: 'flex !important',
                flexDirection: 'column !important',
                gap: '10px !important',
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
                    <SubMenu label="Charts" className='uppercase'>
                        <MenuItem className='uppercase'> Pie charts </MenuItem>
                        <MenuItem className='uppercase'> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem className='uppercase'> Documentation </MenuItem>
                    <MenuItem className='uppercase'> Calendar </MenuItem>
                    <MenuItem className='uppercase'> Documentation </MenuItem>
                    <MenuItem className='uppercase'> Calendar </MenuItem>
                    <MenuItem className='uppercase'> Documentation </MenuItem>
                    <MenuItem className='uppercase'> Calendar </MenuItem>
                </Menu>
            </Sidebar>
        </Box>
    )
}

export default SidebarArticle