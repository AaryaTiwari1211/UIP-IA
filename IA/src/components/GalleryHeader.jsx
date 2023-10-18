import big from '../assets/galleryBig.svg';
import { Typography } from '@mui/material';
import DrawerAppBar from './GalleryApeBar';

export const Header = () => {
    return (
        <>
            <div className='px-16 bg-black'>
                <img src={big} alt="big" className='w-full hover:scale-105 duration-500 ease-in-out' />
                <Typography variant='h2' className='sm:text-penk sm:text-end hidden sm:block' sx={{
                    fontFamily: "Lora",
                    py: 3,
                }}>
                    Discover curated art & design
                </Typography>
            </div>
            <div className='hidden md:flex md:flex-row md:justify-center md:items-center md:gap-4 md:bg-black md:p-16'>
                <Typography variant='h4' className='text-penk'>What&nbsp;we've&nbsp;done</Typography>
                <div className='w-full h-1 bg-penk' />
                <Typography variant='h5' className='text-penk'>Capella Sydney, Australia
                    Mondrian, Singapore
                    Patina Hotel, Maldives</Typography>
                <Typography variant='h5' className='text-penk'>Ritz-Carlton Hotel, Mald
                    Swarowski, China
                    Frasers Tower, Singapor</Typography>
            </div>
        </>
    )
};