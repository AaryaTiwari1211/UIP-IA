import { Button, Typography } from "@mui/material";

export const BeegButton = ({ text, heading }) => {
    return (
        <>
            <div className='flex flex-col justify-center items-center bg-black p-16'>
                <button className='bg-penk hover:scale-105 duration-300 text-black text-5xl font-bold py-2 px-4 w-[35rem] h-20 font-' >
                    {text}
                </button>
                <Typography className='text-penk text-center bg-black pt-24' sx={{
                    fontFamily: "Lora",
                    textSizeAdjust: 'auto',
                    fontSize: '4.5rem',
                }}>{heading}</Typography>
            </div>
        </>
    )
};