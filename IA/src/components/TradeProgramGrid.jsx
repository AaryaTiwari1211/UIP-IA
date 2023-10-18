import Grid from '@mui/material/Grid';
import img from '../assets/gallery/tradeProgram.svg'
import img2 from '../assets/gallery/tradeProgram2.svg'
import img3 from '../assets/gallery/tradeProgram3.svg'
import { Card, LinearProgress, Typography, Box, CardContent } from '@mui/material';

export function TradeProgramGrid() {
    return (
        <>

            <div className='p-16 bg-black flex justify-items-center'>
                <Grid container spacing={2} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Grid item xs={12} sm={6} md={4} className='hover:scale-105 duration-500 ease-in-out relative'>
                        <img src={img2} alt="img1" className='w-full cursor-pointer blur-sm opacity-80' />
                        <div className="absolute inset-0 flex items-center justify-center font-[lora] text-5xl text-white">
                            <p>Dedicated Teams</p>
                        </div>
                        <Typography variant='h4' sx={{
                            pt: 1,
                        }} className='text-penk text-center bg-black'>Transforming spaces with art and design</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className='hover:scale-105 duration-500 ease-in-out relative'>
                        <img src={img3} alt="img1" className='w-full cursor-pointer blur-sm opacity-80' />
                        <div className="absolute inset-0 flex items-center justify-center font-[lora] text-5xl text-white">
                            <p>Dedicated Teams</p>
                        </div>
                        <Typography variant='h4' sx={{
                            pt: 1,
                        }} className='text-penk text-center bg-black'>Transforming spaces with art and design</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className='hover:scale-105 duration-500 ease-in-out relative'>
                        <img src={img} alt="img1" className='w-full cursor-pointer blur-sm opacity-80' />
                        <div className="absolute inset-0 flex items-center justify-center font-[lora] text-5xl text-white">
                            <p>Dedicated Teams</p>
                        </div>
                        <Typography variant='h4' sx={{
                            pt: 1,
                        }} className='text-penk text-center bg-black'>Transforming spaces with art and design</Typography>
                    </Grid>
                </Grid>
            </div>
        </>

    );
}