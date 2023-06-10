import { useEffect, useState } from 'react'
import './filter.css'
import { FaAngleDown } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { reset, setRegion } from '../../../features/countries/countriesSlice'

const Filter = () => {
    const regions = ['Africa', 'Europe', 'Asia', 'Americas', 'Oceania']
    const [filter, setFilter] = useState('')
    const [displayDropdown, setDisplayDropdown] = useState(false)
    const dispatch = useDispatch()

    const handleDropDown = () => {
        setDisplayDropdown(prev => !prev)
    }
    const handleRegionClicked = (item) => {
        handleDropDown()
        setFilter(item)
    }

    useEffect(() => {
        if (filter !== '') {
            dispatch(setRegion(filter.toLowerCase()))
        }
        return () => {
            dispatch(reset())
        }
    }, [filter, dispatch])
    return (
        <section className='filter-container'>
            <div className='filter' onClick={handleDropDown}>
                <input 
                    type="text"
                    readOnly
                    placeholder='Filter By Region'
                    value={filter}
                    className='filter-input'
                />
                <FaAngleDown className='filter-icon' />
            </div>
            {displayDropdown && (
                <div className='dropdown'>
                    {regions.map((item, idnex) => (
                        <div className='dropdown-item' key={idnex} onClick={() => handleRegionClicked(item)}>
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}

export default Filter