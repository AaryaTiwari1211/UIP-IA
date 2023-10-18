import React from 'react'
import { Header } from '../components/GalleryHeader'
import { GalleryGrid } from '../components/GalleryCardGrid'
import DrawerAppBar from "../components/GalleryApeBar"
import { BeegButton } from '../components/BeegButton'
import { TradeProgramGrid } from '../components/TradeProgramGrid'

const Gallery = () => {
    return (
        <>
            <DrawerAppBar />
            <Header />
            <GalleryGrid />
            <GalleryGrid />
            <BeegButton text='Explore' heading='Transforming spaces with art and designFrom small spaces to large-scale developments, our specialist team is here for your project needs. Join the Artling Trade program for exclusive access and trade-only discounts.' />
            <TradeProgramGrid />
        </>
    )
}

export default Gallery