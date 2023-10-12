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
const PhotoBanner = ({ img, text }) => {
    return (
        <Card sx={{ maxWidth: '100%', position: 'relative', maxHeight: '400px' }}>
            <img src={img} alt="Banner" style={{ width: '100%', height: 'auto' }} />
            <CardContent sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute', bottom: 0 }}>
                <Typography variant="h6" component="div" sx={{ color: 'white' }}>
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
}

const PhotoBannerBeeg = ({ img, text }) => {
    return (
        <Card sx={{ maxWidth: '100%', position: 'relative', maxHeight: '400px' }}>
            <img src={img} alt="Banner" style={{ width: '100%', height: 'auto' }} />
            <CardContent sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute', bottom: 0 }}>
                <Typography variant="h6" component="div" sx={{ color: 'white' }}>
                    {text}
                </Typography>
            </CardContent>
        </Card>
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
                </Grid>
                <Grid item xs={8}>
                    <Box className="w-full">
                        <SearchAppBar />
                        <Box className="m-2">
                            <Grid container spacing={1}>
                                {/* <div className="w-auto h-screen">
                            <PhotoBanner img={img3} />
                        </div> */}
                                <Grid item xs={12} md={12} lg={6} sx={{
                                    height: '100%'
                                }}>
                                    <PhotoBannerBeeg img={img3} text={"masti"} />
                                </Grid>
                                <Grid item xs={12} md={12} lg={6} container spacing={1}>
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
                        </Box>
                        <Trending />
                    </Box>
                </Grid>
            </Grid>
        </div >
    )
}

export default Article