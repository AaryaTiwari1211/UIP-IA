import React from 'react'
import SearchAppBar from '../components/SearchAppbar'
import SidebarArticle from '../components/Sidebar_Article'
import { useMediaQuery } from '@mui/material'
import { Grid, Box, Paper, Card, CardContent, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import img1 from '../assets/home/img1.avif'
import img2 from '../assets/home/img2.avif'
import img3 from '../assets/home/img3.avif'
import img4 from '../assets/home/img4.avif'
import Trending from './Trending'
import TimelineComp from '../components/Timeline'

const PhotoBanner = ({ img, text }) => {
    const smallImageStyle = {
        width:'250px',
        height:'auto'
    }
    return (
        <img src={img} alt="Banner" style={smallImageStyle} />
    );
}

const PhotoBannerBeeg = ({ img, text }) => {
    const bigImageStyle = {
        width:'600px',
        height:'auto'
    }
    
    return (
        <img src={img} alt="Banner" style={bigImageStyle} />
    );
}

const Article = () => {
    const md = useMediaQuery('(min-width:600px)');
    return (
        <div className='flex w-full'>
            <Grid container>
                <Grid item xs={4} sx={{
                    backgroundColor: '#1e1e1e',
                }}>
                    {
                        md ? <SidebarArticle /> : ''
                    }
                    <TimelineComp />
                </Grid>
                <Grid container item xs={8}>
                    <Box className="w-full">
                        <Grid item xs={4} spacing={2} sx={{
                            marginLeft: '8px',
                            marginTop: '10px',
                        }}>
                            <SearchAppBar />
                        </Grid>
                        <Box className="m-2">
                            <Grid container spacing={1}>
                                <Grid item xs={12} md={12} lg={6} justifyContent="center" alignItems="center" sx={{
                                    height: '100%'
                                }}>
                                    <PhotoBannerBeeg img="http://annehayes.com.au/wp-content/uploads/2016/02/newspaperface.jpg" />
                                </Grid>
                                <Grid item xs={12} md={12} lg={6} container spacing={1}>
                                    <Grid container>
                                        <Grid item xs={12} md={12} lg={6}>
                                            <PhotoBanner img={img1} text={"landLoond"} />
                                        </Grid>
                                        <Grid item xs={12} md={12} lg={6}>
                                            <PhotoBanner img={img1} text={"landLoond"} />
                                        </Grid>
                                        <Grid item xs={12} md={12} lg={12}>
                                            <PhotoBanner img={img1} text={"landLoond"} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Trending />
                    </Box>
                </Grid>
            </Grid>
        </div >
    )
}

export default Article