import { IoCheckmarkOutline, IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const PlanCard = ({ id, planName, price, depositAmount, popular = false }) => {
    return (
        <>
            <div className={`card ${popular == true ? 'active' : ''}`}>
                {popular == true && <span className='styling'></span>}
                <p className='plan-name'>{planName}</p>
                <p className="price">
                    <span className="fs-4">PKR </span>{price} <span className="fs-6"> / MONTH </span>
                    <p><span>Deposit: Rs {depositAmount} (refundable)</span></p>
                </p>

                <ul className="lists">
                    <li className="list">
                        <div className="icon check"><IoCheckmarkOutline /></div>
                        <span className="plan-value">{planName === "NOVICE" ? 2 : planName === "NOVICE+" ? 2 : 4}</span><span className="plan-text">Monthly Games</span>
                    </li>
                    <li className="list">
                        <div className="icon check"><IoCheckmarkOutline /></div>
                        <span className="plan-value">{planName === "NOVICE" ? 1 : planName === "NOVICE+" ? 1 : 2}</span><span className="plan-text">At a Time</span>
                    </li>
                    <li className="list">
                        <div className="icon check"><IoCheckmarkOutline /></div>
                        <span className="plan-value">{planName === "NOVICE" ? 2 : planName === "NOVICE+" ? 2 : 2}</span><span className="plan-text">Free Delivery </span>
                    </li>
                    <li className="list">
                        <div className="icon check"><IoCheckmarkOutline /></div>
                        <span className="plan-value">-</span><span className="plan-text">Old Games</span>
                    </li>
                    <li className="list">
                        {planName === "NOVICE" ? <div className="icon close"><IoCloseOutline /></div> : planName === "NOVICE+" ? <div className="icon check"><IoCheckmarkOutline /></div> : <div className="icon check"><IoCheckmarkOutline /></div>}
                        <span className="plan-value">-</span><span className="plan-text">New Games</span>
                    </li>
                </ul>
                <div className="d-flex justify-content-center align-items-center text-center">
                    <Link to={`/checkout/${id}`} className="button-submit w-100">
                        Get started
                    </Link>
                </div>
            </div>
        </>


    )
}

export default PlanCard