import "./navbar.style.css";
const Navbar = ()=>{
    return(
        <div className="search-box">
            <form>
                <input placeholder="Busqueda"/>
                <button>Buscar</button>
            </form>
        </div>
    )
}
export default Navbar;