import React from 'react';
import ShopCard from "./ShopCard";

const CardsView = ({ cards }) => {

  return (
    <div className='cards-container'>
      {
        cards.map((item) => (
          <ShopCard name={item.name} price={item.price} color={item.color} img={item.img} key={item.img}/>
        ))
      }
    </div>
  );
};

export default CardsView;
