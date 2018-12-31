import React from 'react';
import Slider from 'react-slick';
import MyButton from '../utils/button';

const HomeSlider = (props) => {

    const slides = [
        {
            img:'/images/featured/slider3.jpg',
            lineOne:'Name Brands',
            lineTwo:'No need to leave your home',
            linkTitle:'Shop now',
            linkTo:'/shop'
        },
        {
            img:'/images/featured/slider2.jpg',
            lineOne:'Shop from across the world',
            lineTwo:'Awesome discounts',
            linkTitle:'View offers',
            linkTo:'/shop'
        },
        {
            img:'/images/featured/slider1.jpg',
            lineOne:'Cheapest online prices',
            lineTwo:'PayPal checkout available',
            linkTitle:'Secure shopping',
            linkTo:'/shop'
        }
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    const generateSlides = () => (
        slides ?
            slides.map((item,i)=>(
                <div key={i}>
                    <div className="featured_image"
                        style={{
                            background:`url(${item.img})`,
                            height:`${window.innerHeight}px`
                        }}
                    >
                        <div className="featured_action">
                            <div className="tag title">{item.lineOne}</div>
                            <div className="tag low_title">{item.lineTwo}</div>
                            <div>
                                <MyButton
                                    type="default"
                                    title={item.linkTitle}
                                    linkTo={item.linkTo}
                                    addStyles={{
                                        margin:'10px 0 0 0'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))
        :null
    )
    
 

    return (
        <div className="featured_container">
            <Slider {...settings}>
                { generateSlides()}
            </Slider>
        </div>
    );
};

export default HomeSlider;