import React, {useState} from 'react';
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";
import { products as data } from '../../data/productsData';

const Store = () => {

  const [icon, setIcon] = useState(true);

  let pic = icon ? 'view_module' : 'view_list';

  return (
    <>
      <IconSwitch
        icon={pic}
        onSwitch={() => setIcon(!icon)}
      />

      {
        icon ?
          <CardsView
            cards={data}
          /> :
          <ListView
            items={data}
          />
      }
    </>
  );
};

export default Store;

