import React from 'react';
import MyButton from '../utils/button';

const HomePromotion = (props) => {

    const promotion = {
        img:'/images/featured/featured_home_4.jpg',
        lineOne:'Up to 20% off',
        lineTwo:'in bulk and organic foods',
        linkTitle:'Shop now',
        linkTo:'/shop'
    }

    const renderPromotion = () => (
        promotion ?
        <div className="home_promotion_img"
            style={{
                background:`url(${promotion.img})`
            }}
        >
                <div className="tag title">{promotion.lineOne}</div>
                <div className="tag low_title">{promotion.lineTwo}</div>
                <div className="shop_now_button">
                    <MyButton
                        type="default"
                        title={promotion.linkTitle}
                        linkTo={promotion.linkTo}
                        addStyles={{
                            margin: '10px 0 0 0'
                        }}
                    />
                </div>
        </div>
        :null
    )

    return (
        <div className="home_promotion">
            {renderPromotion()}
        </div>
    );
};

export default HomePromotion;