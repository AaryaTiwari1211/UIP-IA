import big from '../assets/galleryBig.svg';
import { Typography } from '@mui/material';
import DrawerAppBar from './GalleryApeBar';

export const Header = () => {
    return (
        <>
            <div className='px-16 bg-black'>
                <img src={big} alt="big" className='w-full' />
                <Typography variant='h2' className='sm:text-penk sm:text-end hidden sm:block' sx={{
                    fontFamily: "Lora",
                    py: 3,
                }}>
                    Discover curated art & design
                </Typography>
            </div>
        </>
    )
};