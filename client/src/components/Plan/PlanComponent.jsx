import { planData } from '../PlanText/PlanText'
import PlanCard from './PlanCard'

const PlanComponent = () => {
    return (
        <>
            <div className="plan-container container my-5">
                <div className="text-center pb-5" data-aos="zoom-in"
                    data-aos-delay="100"
                    data-aos-duration="500">
                    <h2>Choose your plan</h2>
                    <h6>Choose the subscription plan that suits you and your entertainment best</h6>
                </div>
                <div className="row">
                    {planData.map((i) => {
                        return <div key={i.id} className="col-12 col-md-4 col-sm-12 mb-5 p-1" data-aos="zoom-in-up"
                            data-aos-delay="100"
                            data-aos-duration="800">
                            <PlanCard id={i.id} planName={i.planName} price={i.price} depositAmount={i.depositAmount} popular={i.popular} />
                        </div>
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default PlanComponent