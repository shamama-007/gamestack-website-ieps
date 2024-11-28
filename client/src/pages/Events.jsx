import EventComponent from "../components/Event/Event"
import Footer from "../components/Layout/Footer"
import Navbar from "../components/Layout/Navbar"

const Events = () => {
  return (
    <>
        <Navbar />
        <div className="container mt-5">
            <EventComponent />
        </div>
        <Footer />
    </>
  )
}

export default Events