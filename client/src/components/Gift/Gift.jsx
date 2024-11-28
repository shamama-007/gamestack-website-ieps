import "./giftStyle.scss";

const GiftComponent = () => {
    return (
        <div><section className="plan-container gift-page-sec">
            <div className="text-center pb-5" data-aos="zoom-in"
                data-aos-delay="100"
                data-aos-duration="500">
                <h2>GIFT CARDS</h2>
            </div>
            <div className="container mb-5">
                {/* Gift Start */}
                <p className="giftText">Where all PlayStation, Xbox & Nintendo Gift Cards available. On the left you can first select the Platform i.e. PlayStation, Xbox and Nintendo then on the PlayStation there will be 3 regions i.e. USA, UK and UAE. Once you select the region you will see all the denominations of Gift Cards available along with a price and a buy now option. Xbox is region free you will be only USD cards same for Nintendo.</p>
                {/* Gift End */}
            </div>
        </section></div>
    )
}

export default GiftComponent