import "./eventCardStyle.scss"
// import { GiConsoleController } from "react-icons/gi";
const EventsCard = ({imageLink}) => {
  return (
    <div className="event-card">
      <div className="image_container">
        <img src={import.meta.env.VITE_BACKEND_URL + imageLink} alt="" />
      </div>
    </div>
  )
}

export default EventsCard