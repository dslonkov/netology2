import React from 'react';

const ShopItem = (props) => {
  return (
    <div className='shopItem'>

      <img className='shopImg' src={props.img} />

      <h2 className="title">
        {props.name}
      </h2>

      <p className="subtitle">
        {props.color}
      </p>

      <div className="price">
        {props.price}
      </div>

      <div className='button'>add to cart</div>
    </div>
  );
};

export default ShopItem;
