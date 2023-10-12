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
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            fontFamily: 'var(--font)',
                            fontSize: '0.8rem'
                        }}
                    >
                        {author}
                    </Typography>
                    <Box width={4} height={0.1} sx={{
                        backgroundColor: 'black'
                    }} />
                    <Typography
                        sx={{
                            fontFamily: 'var(--font)',
                            fontSize: '0.8rem',
                            color: 'gray'
                        }}
                    >
                        {date}
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            fontFamily: 'var(--font)',
                            fontSize: '1rem'
                        }}
                    >
                        {title}
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography
                    sx={{
                        fontFamily: 'var(--font)',
                        fontSize: '0.9rem',
                    }}
                >
                    {desc}
                </Typography>
            </Box>
        </Box>
    )
}

const MiddleSectionItem = ({ img, author, title, date }) => {
    return (
        <Box className="flex gap-5 item-center">
            <Box className="w-36 h-36">
                <img src={img} alt="" />
            </Box>
            <Box className="flex flex-col items-start justify-start">
                <Box className="flex items-center gap-4">
                    <Typography
                        sx={{
                            fontFamily: 'var(--font)',
                            fontSize: '0.8rem'
                        }}
                    >
                        {author}
                    </Typography>
                    <Box width={4} height={0.1} sx={{
                        backgroundColor: 'black'
                    }} />
                    <Typography
                        sx={{
                            fontFamily: 'var(--font)',
                            fontSize: '0.8rem',
                            color: 'gray'
                        }}
                    >
                        {date}
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            fontFamily: 'var(--font)',
                            fontSize: '1rem'
                        }}
                    >
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
            <MiddleSectionItem img={img1} author="Aarya Dhairya Dhruv" title="Penn’s expanding political climate gears up for 2020 election" date="27 Dec 2020" />
            <MiddleSectionItem img={img1} author="Aarya Dhairya Dhruv" title="Penn’s expanding political climate gears up for 2020 election" date="27 Dec 2020" />
            <MiddleSectionItem img={img1} author="Aarya Dhairya Dhruv" title="Penn’s expanding political climate gears up for 2020 election" date="27 Dec 2020" />
            <MiddleSectionItem img={img1} author="Aarya Dhairya Dhruv" title="Penn’s expanding political climate gears up for 2020 election" date="27 Dec 2020" />
        </Box>
    )
}

const RightSection = () => {

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
                    <LeftSection img={img1} title="Aarya Tiwari" desc="Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing 
                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
                    PageMaker including versions of Lorem Ipsum." author="Aarya Dhairya Dhruv" date="27/01/24" />
                </Grid>
                <Grid item xs={5}>
                    <MiddleSection />
                </Grid>
            </Grid>
        </div>
    )
}

export default Trending