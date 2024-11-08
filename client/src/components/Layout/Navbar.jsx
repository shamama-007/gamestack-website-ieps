import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoCloseOutline } from "react-icons/io5";
import SearchBar from '../Search/Search';
import Logo from "../../assets/img/logo.png"
const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [searchToggle, setSearchToggle] = useState(false);

    const onSearchHandler = () => {
        setSearchToggle(!searchToggle);
    }


    return (
        <div className="custom-container d-flex justify-content-center align-items-center">
            <nav className="navbar">
                {/* <Link to="/"><h3 className='logo'>GAMES<span className="fs-6">.com</span></h3></Link> */}
                <Link to="/"> <img src={Logo} alt="" /> </Link>
                <div className="menu">
                    <Link to="/">HOME</Link>
                    <Link to="/contact">CONTACT</Link>
                    <Link to="/plan">PLAN</Link>
                    <Link to="/signin">SIGN IN</Link>
                    <Link to="/signup">SIGN UP</Link>
                </div>
                <div className="account">
                    <button type='button' onClick={onSearchHandler} className='custom-style-btn'> SEARCH GAMES
                        <span></span>
                    </button>
                </div>
                <div className="burger-menu" onClick={() => setMenuToggle(!menuToggle)}>
                    <div className="burger line1"></div>
                    <div className="burger line2"></div>
                    <div className="burger line3"></div>

                </div>
            </nav>

            {/* Mobile Response */}
            <div className={`side-menu-mobile ${menuToggle === true ? 'active' : ''}`}>
                <div className="header-logo">
                    <Link to="/"><h3 className='logo-mobile'>GAMES<span className="fs-6">.com</span></h3></Link>
                    <span className="close-menu-mobile" onClick={() => setMenuToggle(!menuToggle)} ><IoCloseOutline /></span>
                </div>

                <div className="menu-mobile">
                    <Link to="/">HOME</Link>
                    <Link to="/categories">CATEGORIES</Link>
                    <Link to="/plan">PLAN</Link>
                    <Link to="/signin">SIGN IN</Link>
                    <Link to="/signup">SIGN UP</Link>
                </div>

                <div className="account-mobile" >
                    <button onClick={onSearchHandler} type='button' className='custom-style-btn'>SEARCH GAMES
                        <span></span>
                    </button>
                </div>
            </div>

            {/* Search Bar */}
            <SearchBar searchToggle={searchToggle} />

        </div>
    )
}

export default Navbar