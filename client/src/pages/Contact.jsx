import Footer from "../components/Layout/Footer"
import ContactComponent from "../components/Contact/Contact"
import Navbar from "../components/Layout/Navbar"

const Contact = () => {
  return (
    <>
        <Navbar />
        <div className="container mt-5">
            <ContactComponent />
        </div>
        <Footer />
    </>
  )
}

export default Contact