import datas from '../../datas/dataItem';
import '../../styles/btn.css';

function Item({ cart, updateCart, sort, variationPrice }) {
  function callUpdateCart(name, price) {
    const currentIcecreamAdded = cart.find(
      (icecream) => icecream.name === name
    );
    if (currentIcecreamAdded) {
      const cartWithoutItem = cart.filter((icecream) => icecream.name !== name);
      updateCart([
        ...cartWithoutItem,
        { name, price, amount: currentIcecreamAdded.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  function sortByCategory(category) {
    return datas.filter((data) => data.category === category);
  }
  let datasSorted = datas;
  if (sort.length !== 0) {
    datasSorted = sortByCategory(sort.category);
  }
  datasSorted = datasSorted.sort((a, b) => b.price - a.price);
  if (variationPrice) {
    datasSorted = datasSorted.sort((a, b) => a.price - b.price);
  }
  return datasSorted.map((data) => (
    <div className="col-xl-4 col-md-6 col-12 mb-5">
      <div
        key={data.name + data.price}
        className=" rounded bg-light text-dark shadow"
      >
        <img
          className="rounded-top"
          alt="icecream"
          width="100%"
          src={data.img}
        />
        <div className="col-12 text-center pt-2    lead">{data.name}</div>
        <div className="row col-12 pt-1 pb-2">
          <div className="col-8 text-center lead">
            {data.price.toFixed(2)} €
          </div>
          <button
            onClick={() => callUpdateCart(data.name, data.price)}
            className="icecream-btn col-4"
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  ));
}
export default Item;
