import { useState } from 'react';
import Cart from '../Cart';
import ListItem from '../ListItem';

function Home() {
  const [cart, updateCart] = useState([]);
  return (
    <div className="container mt-4 pb-5">
      <div className="row">
        <Cart cart={cart} updateCart={updateCart} />
        <ListItem cart={cart} updateCart={updateCart} />
      </div>
    </div>
  );
}
export default Home;
