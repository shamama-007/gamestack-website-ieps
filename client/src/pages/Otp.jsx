import OtpIcon from '../assets/icon/OtpIcon'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'

const Otp = () => {
    return (
        <>
            <Navbar />
            <div className="container d-flex justify-content-center py-5 h-100">
                <form className="form">
                    <h3>OTP</h3>
                    <div className="flex-column">
                        <label>Code </label>
                    </div>
                    <div className="inputForm">
                        <OtpIcon />
                        <input type="text" className="input" placeholder="Enter your Otp" />
                    </div>
                    <span className='text-danger'>Enter your valid otp</span>
                    <div>
                        <button className="button-submit">Verify</button>
                    </div>
                </form>
            </div>
            <Footer />

        </>
    )
}

export default Otp