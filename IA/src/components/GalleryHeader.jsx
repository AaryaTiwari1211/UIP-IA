import jhaad from '../assets/galleryjhaad.svg';
import { Typography } from '@mui/material';

export const Header = () => {
    return (
        <>
            <div className='flex flex-row justify-between  bg-[#000000]'>
                <div>
                    <img src={jhaad} alt="jhaad" className='hidden sm:block sm:w-[30rem]' />
                </div>
                <div className='sm:flex sm:flex-col sm:p-5 gap-16 '>
                    <div className='sm:flex flex-row gap-10 hidden'>
                        <Typography variant='h5' className=' text-penk'><a className=' hover:underline cursor-pointer'>
                            FIND ART</a></Typography>
                        <Typography variant='h5' className='text-penk'><a className=' hover:underline cursor-pointer'>
                            COLLECTIBLE DESIGN</a></Typography>
                        <Typography variant='h5' className='text-penk'><a className=' hover:underline cursor-pointer'>
                            FOR TRADE</a></Typography>
                        <Typography variant='h5' className='text-penk'><a className=' hover:underline cursor-pointer'>
                            ART CONSULTANCY</a></Typography>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <Typography variant='h2' className='text-penk w-10/12 text-center' sx={{
                            fontFamily:"Lora",
                        }}>
                            Transforming spaces with Art and Design
                        </Typography>
                    </div>
                </div>
            </div>
        </>
    )
};