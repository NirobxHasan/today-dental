import React from 'react'
import './Home.css'
import img from './../../images/header/header-img2.jpg'
const Home = () => {
    return (
        <div>
            <div
                id="carouselExampleSlidesOnly"
                className="carousel slide mt-5 caro"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={img}
                            className="d-block w-100 caro-img"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-caption d-block mt-5 caro-text">
                        <h1 className="mt-5">Complete Dental Solution</h1>
                        <p>
                            Beyond brushing, the internal factors that nourish
                            the teeth are so important: eating real foods,
                            hormonal balanced, minerals, fat-soluble vitamins,
                            and healthy fluid exchange through the teeth.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
