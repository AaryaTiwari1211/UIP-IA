import Grid from '@mui/material/Grid';
import img1 from '../assets/gallery/image1.svg'
import img2 from '../assets/gallery/image2.svg'
import img3 from '../assets/gallery/image3.svg'
import { Card, LinearProgress, Typography, Box } from '@mui/material';

export function GalleryGrid() {
    return (
        <>
            
            <div className='p-16 bg-black flex justify-items-center'>
                <Grid container spacing={2} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Grid item xs={12} sm={6} md={4} className='hover:scale-105 duration-500 ease-in-out'>
                        <img src={img1} alt="img1" className='w-full cursor-pointer ' />
                        <Typography variant='h5' sx={{
                            pt: 1,
                        }} className='text-penk text-start bg-black'>Rahul Khan</Typography>
                        <Typography variant='h5' className='text-penk text-start bg-black'>India</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className='hover:scale-105 duration-500 ease-in-out'>
                        <img src={img2} alt="img1" className='w-full cursor-pointer' />
                        <Typography variant='h5' sx={{
                            pt: 1,
                        }} className='text-penk text-start bg-black'>Gojou Satoru</Typography>
                        <Typography variant='h5' className='text-penk text-start bg-black'>Japan</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className='hover:scale-105 duration-500 ease-in-out'>
                        <img src={img3} alt="img1" className='w-full cursor-pointer' />
                        <Typography variant='h5' sx={{
                            pt: 1,
                        }} className='text-penk text-start bg-black'>Heisenberg</Typography>
                        <Typography variant='h5' className='text-penk text-start bg-black'>Albequrque</Typography>
                    </Grid>
                </Grid>
            </div>
        </>

    );
}