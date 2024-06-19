import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Section = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img width={"50%"} height={"200vh"} src="img/s1.png" alt="" />
                </div>
                <div>
                    <img width={"100%"} src="img/s2.png" alt="" />
                </div>
                <div>
                    <img width={"100%"} src="img/s3.png" alt="" />
                </div>
                <div>
                    <img width={"100%"} src="img/s4.png" alt="" />
                </div>
                <div>
                    <img width={"100%"} src="img/s5.png" alt="" />
                </div>
                <div>
                    <img width={"100%"} src="img/s5.png" alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default Section
