import React from 'react'
import { Box, Grid, Card, CardContent, Typography } from '@mui/material'
import img1 from '../assets/home/img1.avif'
const LeftSection = ({ img, author, title, desc, date }) => {
    return (
        <Box className="flex flex-col gap-4">
            <Box className="w-full">
                <img src={img} alt="" />
            </Box>
            <Box className="flex flex-col gap-2">
                <Box className="flex gap-3">
                    <Typography variant="p" color="black">{author}</Typography>
                    {" "} - {" "}
                    <Typography>{date}</Typography>
                </Box>
                <Box>
                    <Typography>{title}</Typography>
                </Box>
            </Box>
            <Box>
                <Typography>{desc}</Typography>
            </Box>
        </Box>
    )
}

const MiddleSectionItem = ({ img, author, title, date }) => {
    return (
        <Box className="flex item-center">
            <Box className="h-28 w-28">
                <img src={img} alt="" />
            </Box>
            <Box className="flex flex-col items-start justify-start">
                <Box className="flex gap-4">
                    <Typography>
                        {author}
                    </Typography>
                    -
                    <Typography>
                        {date}
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                        {title}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
const MiddleSection = () => {
    return (
        <Box className="flex flex-col gap-4">
            <MiddleSectionItem img={img1} author="Aarya Dhairya Dhruv" title="Penn’s expanding political climate gears up for 2020 election" date="27 Dec 2020"/>
            <MiddleSectionItem img={img1} author="Aarya Dhairya Dhruv" title="Penn’s expanding political climate gears up for 2020 election" date="27 Dec 2020"/>
            <MiddleSectionItem img={img1} author="Aarya Dhairya Dhruv" title="Penn’s expanding political climate gears up for 2020 election" date="27 Dec 2020"/>
            <MiddleSectionItem img={img1} author="Aarya Dhairya Dhruv" title="Penn’s expanding political climate gears up for 2020 election" date="27 Dec 2020"/>
        </Box>
    )
}

const Trending = () => {
    return (
        <div className='m-3'>
            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                Trending
            </Typography>
            <Box height={20} />
            <Box width="100%" height={2} sx={{
                backgroundColor: 'black'
            }} />
            <Box height={20} />
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <LeftSection img={img1} title="Aarya Tiwari" desc="lorem" author="Aarya Dhairya Dhruv" date="27/01/24" />
                </Grid>
                <Grid item xs={5}>
                    <MiddleSection />
                </Grid>
            </Grid>
        </div>
    )
}

export default Trending