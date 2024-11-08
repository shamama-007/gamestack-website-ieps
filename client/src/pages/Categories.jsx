
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'

import Games1 from "../assets/img/game1.jpg"
import Games2 from "../assets/img/game2.jpg"
import Games3 from "../assets/img/game3.jpg"
import Games4 from "../assets/img/game4.png"
import Games5 from "../assets/img/game5.jpg"
import Games6 from "../assets/img/game5.jpg"
import Games7 from "../assets/img/game7.jpg"
import Games8 from "../assets/img/game8.jpg"
import ProductCard from '../components/ProductComponent/ProductCard'

const Categories = () => {

    const items = [
        { id: 1, budget: 'NEW', image: Games1, category: "Action", title: "Just Cause 2", mrp: 100, price: 80 },
        { id: 2, budget: 'NEW', image: Games2, category: "Action", title: "Skyward Symphony", mrp: 100, price: 80 },
        { id: 3, budget: 'NEW', image: Games3, category: "Action", title: "Whispered Wilds", mrp: 100, price: 80 },
        { id: 4, budget: 'NEW', image: Games4, category: "Action", title: "Clockwork Cavern", mrp: 100, price: 80 },
        { id: 5, budget: 'NEW', image: Games5, category: "Action", title: "Pixelated Pantheon", mrp: 100, price: 80 },
        { id: 6, budget: 'NEW', image: Games6, category: "Action", title: "Neon Nebula", mrp: 100, price: 80 },
        { id: 7, budget: 'NEW', image: Games7, category: "Action", title: "Ember Isles", mrp: 100, price: 80 },
        { id: 8, budget: 'NEW', image: Games8, category: "Action", title: "Dragonkin Dynasty", mrp: 100, price: 80 },
    ]
    return (
        <>
            <Navbar />


            {/* <!-- Trending Product Section - Start --> */}
            <section className='product-container mt-4'>
                <div className="container product-showCase product-showCase-list">
                    <div className="product-showCase-header mb-4">
                        <h3>CATEGORIES</h3>
                    </div>
                    <div className="row g-4">
                        {items.map(i => {
                            return <div className="col-6 col-sm-6 col-md-4 col-lg-3 m-0 p-2" key={i.id}>
                                <ProductCard {...i} active={true} />
                            </div>
                        })}

                    </div>
                </div>
            </section>
            {/* <!-- Trending Product Section - End --> */}

            <Footer />

        </>
    )
}

export default Categories