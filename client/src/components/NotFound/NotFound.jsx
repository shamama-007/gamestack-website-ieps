import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import { Link} from "react-router-dom";
import "../customStyle.scss";


const NotFound = () => {
    return (
        <>
            <Navbar />
            <div id='oopss'>
                <div id='error-text'>
                    <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404" />
                    <span>404 PAGE</span>
                    <p className="p-a">
                        . The page you were looking for could not be found</p>
                    <Link to={"/"} className="back">GO TO HOME PAGE</Link>


                </div>
            </div>
            <Footer />
        </>
    );
};

export default NotFound;
