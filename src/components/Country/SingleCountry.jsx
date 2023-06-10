/* eslint-disable react/prop-types */
import './country.css'
import { Link } from "react-router-dom"

const SingleCountry = ({ flags, name, population, region, capital, cioc }) => {
    return (
        <Link to={`/${cioc}`} className='country-card'>
            <img src={flags.png} alt={flags.alt} className='country-image' />
            <div className='country-content'>
                <h3>{name.common}</h3>
                <p>
                    Population: {new Intl.NumberFormat().format(population)}<span></span>
                </p>
                <p>
                    Region: {region}<span></span>
                </p>
                <p>
                    Capital: {capital}<span></span>
                </p>
            </div>
        </Link>
    )
}

export default SingleCountry