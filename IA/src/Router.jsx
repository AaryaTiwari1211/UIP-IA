import Article from "./pages/Article"
import { Routes, Route } from "react-router-dom"
import Gallery from "./pages/Gallery"



export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/article" element={<Article />} />
            <Route path="/" element={<Gallery />} />
        </Routes>
    )
}