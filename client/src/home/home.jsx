import Navbar from "../components/navbar/navbar"
import Cards from "../components/cards/cards"
import "./home.style.css";
const Home = ()=>{
    return(
        <div className="home">
            <h2 className="home-title">Home page</h2>
            <Navbar/>
            <Cards/>
        </div>
    )
}
export default Home;