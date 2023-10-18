import { Button, Typography } from "@mui/material";

export const BeegButton = ({ text, heading, size }) => {
    return (
        <>
            <div className='flex flex-col justify-center items-center bg-black p-16'>
                {size === 'small' ?
                    <button className='bg-penk hover:scale-105 duration-300 text-black text-4xl md:text-5xl font-bold py-2 px-4 w-[20rem] md:w-[30rem] h-20 font-[lora]' >
                        {text}
                    </button> : size === 'medium' ?
                        <button className='bg-penk hover:scale-105 duration-300 text-black text-3xl md:text-5xl font-bold w-[25rem] sm:w-[40rem] py-2 h-20 font-[lora]' >
                            Join&nbsp;Our&nbsp;Trade&nbsp;Program
                        </button> : null}
                {/* <Typography className='text-penk text-center bg-black pt-24' sx={{
                    fontFamily: "Lora",
                    textSizeAdjust: 'auto',
                    fontSize: '3rem',
                }}>{heading ? heading : null}</Typography> */}
                <div className='flex flex-col justify-center items-center text-penk text-center font-[lora] text-xl sm:text-5xl bg-black pt-10 sm:p-16'>
                    <p>{heading?heading:null}</p>
                </div>
            </div>
        </>
    )
};