import './country-detail.css'
import { useParams, Link } from "react-router-dom"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { useEffect } from "react"
import { fetchCountryByCode } from "../../features/countries/countriesActions.js"
import { useSelector, useDispatch } from "react-redux"
import { selectCountriesState, reset } from "../../features/countries/countriesSlice.js"

const CountryDetail = () => {
    const { code } = useParams()
    const dispatch = useDispatch()
    const { loading, error, countrySearch } = useSelector(selectCountriesState)
    useEffect(() => {
        if (code) {
            dispatch(fetchCountryByCode(code.toLowerCase()))
        }
        if (error) {
            console.log(error)
        }
        return () => {
            dispatch(reset())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [code, dispatch])

    if (code === 'undefined') {
        return (
            <div>Country Has No Data</div>
        )
    }

    if (loading) return <h1>Loading...</h1>

    if (countrySearch.length <= 0) return <div>No Details</div>

    return (
        <section className="country-detail-container">
            <Link to="/" className="back-button">
                <AiOutlineArrowLeft /> Back
            </Link>
            <div className="country-detail-content">
                <img src={countrySearch[0].flags.png} alt={countrySearch[0].name.official} className="country-detail-image" />
                <div className="country-detail-right">
                <h1>{countrySearch[0].name.common}</h1>
                    <div className="details">
                        <div className="detail-left">
                            <p>
                                Official Name: <span>{countrySearch[0].name.official}</span>
                            </p>
                            <p>
                                Population: <span>{new Intl.NumberFormat().format(countrySearch[0].population)}</span>
                            </p>
                            <p>
                                Region: <span>{countrySearch[0].region}</span>
                            </p>
                            <p>
                                Sub Region: <span>{countrySearch[0].subregion}</span>
                            </p>
                            <p>
                                Capital: <span>{countrySearch[0].capital}</span>
                            </p>
                        </div>
                        <div className="detail-right">
                            <p>
                                Top Level Domain: <span>{countrySearch[0].tld[0]}</span>
                            </p>
                            <p>
                                Currencies: <span>{Object.entries(countrySearch[0].currencies).map(item => item[1].name).join(', ')}</span>
                            </p>
                            <p>
                                Languages: <span>{Object.values(countrySearch[0].languages).join(', ')}</span>
                            </p>
                        </div>
                    </div>
                    <div className="border">
                        <p>Border Countries:</p>
                        {
                            countrySearch[0].borders.length > 0
                            ? (
                                countrySearch[0].borders.map((item, index) => (
                                    <Link to={`/${item}/`} key={index} className="border-name">{item}</Link>
                                ))
                            )
                            : (
                                <span>No Borders</span>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CountryDetail