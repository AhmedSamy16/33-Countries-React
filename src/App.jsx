import { Routes, Route } from "react-router-dom"
import './App.css'
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import CountryDetail from "./pages/Country-Detail/CountryDetail"
import { useSelector } from "react-redux"
import { selectTheme } from "./features/theme/themeSlice"

function App() {
  const darkTheme = useSelector(selectTheme)
  return (
    <main className={`main-container ${darkTheme ? 'dark' : ''}`}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/:code" element={<CountryDetail />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
