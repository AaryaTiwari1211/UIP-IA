import React from 'react'
import SearchAppBar from '../components/SearchAppbar'
import SidebarArticle from '../components/Sidebar_Article'
import { useMediaQuery } from '@mui/material'
import { Grid, Box, Paper, Card, CardContent, Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import img1 from '../assets/home/img1.avif'
import img2 from '../assets/home/img2.avif'
import img3 from '../assets/home/img3.avif'
import img4 from '../assets/home/img4.avif'
import Trending from './Trending'
import TimelineComp from '../components/Timeline'

const NestedGrid = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={8}>
                <Paper sx={{ height: 450, overflow: 'hidden' }}>
                    <img src={img1} alt="Big" style={{ width: '100%', height: '100%' }} />
                </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ height: 215, overflow: 'hidden' }}>
                            <img src={img2} alt="Small 1" style={{ width: '100%', height: '100%' }} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ height: 215, overflow: 'hidden' }} >
                            <img src={img2} alt="Small 1" style={{ width: '100%', height: '100%' }} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <Paper sx={{ height: 219, overflow: 'hidden' }}>
                            <img src={img3} alt="Small 2" style={{ width: '100%', height: '100%' }} />
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

const Article = () => {
    const xl = useMediaQuery('(min-width:1440px)')
    const lg = useMediaQuery('(min-width:1024px)')
    const [open, setOpen] = React.useState(false);
    return (
        <div className='flex w-full'>
            <Grid container item xs={2} md={2} lg={2} xl={4} sx={{
                backgroundColor: xl ? '#1e1e1e' : '#FFFFFF',
                display: xl ? 'flex' : 'none',
                alignContent: 'start',
            }}>
                <SidebarArticle open={open} setOpen={setOpen} />
                {
                    xl && <TimelineComp />
                }
            </Grid>
            <Grid container item xs={12} md={12} lg={12} xl={8}>
                <Box className="w-full">
                    <Box className="flex w-full">
                        {!xl && (
                            <IconButton
                                edge="start"
                                aria-label="menu"
                                onClick={() => setOpen(true)}
                                size="large"
                                sx={{
                                    padding: '20px',
                                }}
                            >
                                <MenuIcon sx={{
                                    color: 'black',
                                }} />
                            </IconButton>
                        )}
                        <Grid item xs={12} lg={12} spacing={2} sx={{
                            margin: '8px'
                        }}>
                            <SearchAppBar />
                        </Grid>
                    </Box>
                    <Box className="m-2">
                        <NestedGrid />
                    </Box>
                    <Trending />
                </Box>
            </Grid>
        </div >
    )
}

export default Article