import './home.css'
import Filter from "../../components/Input/filter/Filter"
import Search from "../../components/Input/search/Search"
import Country from "../../components/Country/Country"

const Home = () => {
    return (
        <section className='home-page-container'>
            <div className='input-container'>
                <Search />
                <Filter />
            </div>
            <Country /> 
        </section>
    )
}

export default Home