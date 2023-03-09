import React from 'react';

const ShopCard = (props) => {
  return (
    <div className='card'>
      <h2 className="title">
        {props.name}
      </h2>

      <p className="subtitle">
        {props.color}
      </p>

      <img className='img' src={props.img} />

      <div className="wrapper">
        <div className="price">
          {props.price}
        </div>

        <div className='button'>add to cart</div>
      </div>
    </div>
  );
};

export default ShopCard;
