import { useState } from 'react';
import Category from '../Category';
import Item from '../Item';

function ListItem({ cart, updateCart }) {
  const [sort, updateSort] = useState([]);
  const [variationPrice, updateVariationPrice] = useState(true);
  return (
    <div className="col-xl-9">
      <div className="row">
        <Category
          sort={sort}
          updateSort={updateSort}
          variationPrice={variationPrice}
          updateVariationPrice={updateVariationPrice}
        />
        <Item
          cart={cart}
          updateCart={updateCart}
          sort={sort}
          updateSort={updateSort}
          variationPrice={variationPrice}
          updateVariationPrice={updateVariationPrice}
        />
      </div>
    </div>
  );
}
export default ListItem;
