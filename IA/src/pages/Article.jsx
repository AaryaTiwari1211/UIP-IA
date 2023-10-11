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
const PhotoBanner = ({ img }) => {
    return (
        <Card sx={{ maxWidth: '100%', position: 'relative', maxHeight: '400px' }}>
            <img src={img2} alt="Banner" style={{ width: '100%', height: 'auto' }} />
            <CardContent sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute', bottom: 0 }}>
                <Typography variant="h6" component="div" sx={{ color: 'white' }}>
                    Text at the Bottom
                </Typography>
            </CardContent>
        </Card>
    );
}

const Article = () => {
    const md = useMediaQuery('(min-width:600px)');
    return (
        <div className='flex w-full'>
            {
                md ? <SidebarArticle /> : ''
            }

            <Box className="w-full">
                <SearchAppBar />
                <Box className="m-2">
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={12} lg={6} sx={{
                            height: '100%'
                        }}>
                            <PhotoBanner img={img1} />
                        </Grid>
                        <Grid item xs={12} md={12} lg={6} container spacing={1}>
                            <Grid item xs={12} md={12} lg={6}>
                                <PhotoBanner img={img1} />
                            </Grid>
                            <Grid item xs={12} md={12} lg={6}>
                                <PhotoBanner img={img1} />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                                <PhotoBanner img={img1} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Trending />
            </Box>
        </div>
    )
}

export default Article