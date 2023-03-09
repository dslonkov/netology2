import React from 'react';
import ShopItem from "./ShopItem";

const ListView = ({ items }) => {
  return (
    <div className='list-container'>
      {
        items.map((item) => (
          <ShopItem name={item.name} price={item.price} color={item.color} img={item.img} key={item.img}/>
        ))
      }
    </div>
  );
};

export default ListView;
