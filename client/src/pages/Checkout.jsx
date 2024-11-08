import Footer from '../components/Layout/Footer'
import Navbar from '../components/Layout/Navbar'
import { useParams, useNavigate } from 'react-router-dom';
import { planData } from '../components/PlanText/PlanText';
import CheckoutComponent from '../components/Checkout/CheckoutComponent';
import { useEffect, useState } from 'react';
const Checkout = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        const returnDataValue = planData.filter(i => {
            return i.id === Number(id)
        })
        setData(returnDataValue)
        if (returnDataValue.length === 0) {
            navigate('/')
        }
    }, [])

    return (
        <>
            <Navbar />
            <CheckoutComponent {...data[0]} />
            <Footer />
        </>
    )
}

export default Checkout