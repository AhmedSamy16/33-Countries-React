import './country.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCountries, fetchCountryByRegion } from '../../features/countries/countriesActions'
import { useEffect } from 'react'
import { selectCountriesState } from '../../features/countries/countriesSlice'
import SingleCountry from "./SingleCountry"

const Country = () => {
    const { countriesData, loading, success, error, region, searchTerm } = useSelector(selectCountriesState)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllCountries())
        if (region) {
            dispatch(fetchCountryByRegion(region))
        }
        if (error) {
            console.log(error)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error, dispatch, success, region])
    const data = countriesData.filter(item => item.name.common.toLowerCase().includes(searchTerm))
    return (
        <section className='country-container'>
            {
                loading
                ? <h1>Loading...</h1>
                : data.length > 0 && data.map((item, index) => <SingleCountry key={index} {...item} />)
            }
        </section>
    )
}

export default Country