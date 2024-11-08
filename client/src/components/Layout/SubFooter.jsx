import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";

const SubFooter = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; {new Date().getFullYear()} All Rights Reserved by
              <a href="#"> GAMES.com</a>
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

export default SubFooter