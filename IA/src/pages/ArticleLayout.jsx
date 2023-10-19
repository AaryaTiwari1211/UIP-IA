import React from 'react'
import SearchAppBar from '../components/SearchAppbar'
import SidebarArticle from '../components/Sidebar_Article'
import { useMediaQuery } from '@mui/material'
import { Grid, Box, Paper, Card, CardContent, Typography, IconButton, Container } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import img1 from '../assets/home/img1.avif'
import img2 from '../assets/home/img2.avif'
import img3 from '../assets/home/img3.avif'
import img4 from '../assets/home/img4.avif'
import Trending from './Trending'
import TimelineComp from '../components/Timeline'

const ArticleLayout = () => {
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
                        {!lg && (
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
                            {
                                lg && <SearchAppBar />
                            }
                        </Grid>
                    </Box>
                    <Container maxWidth="lg" sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: lg ? 'row' : 'column-reverse',
                        alignItems: !lg ? 'center' : 'start',
                    }}>
                        <Box my={4}>
                            <Typography variant="h2" component="h1" gutterBottom sx={{
                                fontWeight: 'bold',
                                fontFamily: 'var(--font)',
                                fontSize: '2.5rem',
                            }}>
                                Article Heading
                            </Typography>
                            <Typography variant="body1" gutterBottom sx={{
                                fontFamily: 'var(--font)',
                                fontSize: '1rem',
                                color: 'gray'
                            }}>
                                Author Name
                            </Typography>
                            <Typography variant="body1" gutterBottom sx={{
                                fontFamily: 'var(--font)',
                                fontSize: '1rem',
                                color: 'gray'
                            }}>
                                Date - 27th Septempter 2023
                            </Typography>
                            <Typography variant="body1" sx={{
                                fontFamily: 'var(--font)',
                                fontSize: '1rem',
                                color: 'black'
                            }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Typography>
                        </Box>
                        <img src={img1} alt="Big" className='h-96 w-96 my-11' />
                    </Container>
                </Box>
            </Grid>
        </div >
    )
}

export default ArticleLayout