import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ active = false, budget = "NEW", image = "", category = "Action", title = "None", mrp = 100, price = "80" }) => {
    return (
        // <div className="col-6 col-sm-6 col-md-4 col-lg-3">
        <Link to="" className="product-single-card">
            <div className="product-top-area">
                <div className="product-budget offer">
                    {budget}
                </div>

                <div className="product-img">
                    <div className="first-view">
                        <img
                            src={image}
                            alt="logo"
                            className="img-fluid"
                            onError={(e) => e.target.src = 'https://i.ibb.co/qpB9ZCZ/placeholder.png'}
                        />
                    </div>
                    <div className="hover-view">
                        <img
                            src={image}
                            alt="logo"
                            className="img-fluid"
                            onError={(e) => e.target.src = 'https://i.ibb.co/qpB9ZCZ/placeholder.png'}
                        />
                    </div>
                </div>
                <div className="sideicons">
                    <button className="sideicons-btn">
                        <i className="fa-solid fa-cart-plus"></i>
                    </button>
                    <button className="sideicons-btn">
                        <i className="fa-solid fa-eye"></i>
                    </button>
                </div>
            </div>
            <div className="product-info">
                <h6 className={`product-category ${active === true ? 'text-center pt-1 text-uppercase' : ''}`}>
                    <a href="#">{category}</a>
                </h6>
                {active !== true ?
                    <>

                        <h6 className="product-title text-truncate">
                            <a href="#">{title}</a>
                        </h6>
                        <div className="d-flex flex-wrap align-items-center py-2">
                            <div className="old-price">
                                Rs. {mrp}
                            </div>
                            <div className="new-price">
                                Rs. {price}
                            </div>
                        </div></>
                    : null
                }
            </div>
        </Link>
        // </div>
    );
};

export default ProductCard;
