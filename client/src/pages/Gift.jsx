import GiftComponent from "../components/Gift/Gift"
import Footer from "../components/Layout/Footer"
import Navbar from "../components/Layout/Navbar"

const Gift = () => {
  return (
    <>
        <Navbar />
        <div className="container mt-5">
            <GiftComponent />
        </div>
        <Footer />
    </>
  )
}

export default Gift