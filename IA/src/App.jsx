
import Article from "./pages/Article"
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./Router"
import DrawerAppBar from "./components/GalleryApeBar"
function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
