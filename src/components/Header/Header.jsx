import './header.css'
import { Outlet } from 'react-router-dom'
import { FaMoon, FaSun } from "react-icons/fa"
import { useSelector, useDispatch } from "react-redux"
import { selectTheme, changeTheme } from '../../features/theme/themeSlice'

const Header = () => {
    const darkTheme = useSelector(selectTheme)
    const dispatch = useDispatch()
    const handleTheme = () => {
        dispatch(changeTheme())
    }
    return (
        <>
            <header className='header'>
                <h1>Where in the world?</h1>
                {
                    darkTheme ? (
                        <div className='theme-light' onClick={handleTheme}>
                            <FaMoon className='icon' />
                            <p>Dark Theme</p>
                        </div>
                    ) : (
                        <div className='theme-dark' onClick={handleTheme}>
                            <FaSun className='icon' />
                            <p>Light Theme</p>
                        </div>
                    )
                }
            </header>
            <Outlet />
        </>
    )
}

export default Header