import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png"

const Footer = () => {
    return (
            <footer className="site-footer">
                <div className="logo d-flex justify-content-center align-items-center mb-3">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">Games.com Explore the ultimate gaming experience, whether you are a casual player or a pro. From reviews and tips to the latest releases, connect with gamers, discover new adventures, and elevate your gameplay!</p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Adventure</a></li>
                                <li><a href="#">Simulation</a></li>
                                <li><a href="#">Sports</a></li>
                                <li><a href="#">Horror</a></li>
                                <li><a href="#">Battle Royale</a></li>
                                <li><a href="#">Survival</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/categories">Categories</Link></li>
                                <li><Link to="/signin">Sign In</Link></li>
                                <li><Link to="/signup">Sign Up</Link></li>
                                <li><Link to="/user/dashboard">User </Link></li>
                                <li><Link to="/admin/dashboard">Admin</Link></li>
                                <li><Link to="/terms_conditions">Terms & Conditions</Link></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; {new Date().getFullYear()} All Rights Reserved by
                                <a href="#"> gamestack.com</a>
                                
                            </p>
                            
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="#"><IoLogoFacebook /></a></li>
                                <li><a className="twitter" href="#"><IoLogoTwitter /></a></li>
                                <li><a className="dribbble" href="#"><IoLogoInstagram /></a></li>
                                <li><a className="linkedin" href="#"><IoLogoLinkedin /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
    )
}
export default Footer