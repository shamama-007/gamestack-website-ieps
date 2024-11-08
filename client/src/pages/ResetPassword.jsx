import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'

const ResetPassword = () => {
    return (
        <>
            <Navbar />
            <div className="container d-flex justify-content-center py-5 h-100">
                <form className="form">
                    <h3>RESET PASSWORD</h3>
                    {/* New Password */}
                    <div className="flex-column">
                        <label>New Password </label>
                    </div>
                    <div className="inputForm">
                        <svg
                            style={{ fill: 'white' }}
                            height="20"
                            viewBox="-64 0 512 512"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"
                            ></path>
                            <path
                                d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"
                            ></path>
                        </svg>
                        <input type="password" className="input" placeholder="Enter your New Password" />
                    </div>

                    {/* Confirm Password */}

                    <div className="flex-column">
                        <label>Confirm Password </label>
                    </div>
                    <div className="inputForm">
                        <svg
                            style={{ fill: 'white' }}
                            height="20"
                            viewBox="-64 0 512 512"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"
                            ></path>
                            <path
                                d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"
                            ></path>
                        </svg>
                        <input type="password" className="input" placeholder="Enter your Confirm Password" />
                    </div>
                   


                    <button className="button-submit">Update password</button>
                </form>

            </div>
            <Footer />


        </>
    )
}

export default ResetPassword