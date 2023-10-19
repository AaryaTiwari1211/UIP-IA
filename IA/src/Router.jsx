import Article from "./pages/Article"
import { Routes, Route } from "react-router-dom"
import Gallery from "./pages/Gallery"
import ArticleLayout from "./pages/ArticleLayout"

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/article" element={<Article />} />
            <Route path="/" element={<Gallery />} />
            <Route path="/article/1" element={<ArticleLayout />} />
        </Routes>
    )
}