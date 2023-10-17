import React from 'react'
import { Header } from '../components/GalleryHeader'
import { GalleryGrid } from '../components/GalleryCardGrid'
import DrawerAppBar from "../components/GalleryApeBar"

const Gallery = () => {
    return (
        <>
            <DrawerAppBar />
            <Header />
            <GalleryGrid />
        </>
    )
}

export default Gallery