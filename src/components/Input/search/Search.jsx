import './search.css'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { selectCountriesState } from '../../../features/countries/countriesSlice'
import { setSearchTerm } from '../../../features/countries/countriesSlice'

const Search = () => {
    const { searchTerm } = useSelector(selectCountriesState)
    const dispatch = useDispatch()

    return (
        <section className='search-container'>
            <div className='search-icon'>
                <RxMagnifyingGlass />
            </div>
            <input 
                type="text"
                placeholder='Search for a country'
                className='search-input'
                value={searchTerm}
                onChange={(e) => dispatch(setSearchTerm(e.target.value.toLowerCase()))}
            />
        </section>
    )
}

export default Search