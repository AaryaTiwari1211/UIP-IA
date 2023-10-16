import Article from "./pages/Article"
import { Routes, Route } from "react-router-dom"
import Gallery from "./pages/Gallery"



export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Article />} />
            <Route path="/gallery" element={<Gallery />} />
        </Routes>
    )
}