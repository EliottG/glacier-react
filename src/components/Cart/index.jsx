import '../../styles/btn.css';
import '../../styles/Cart.css';
import cartImg from '../../assets/panier.png';

function Cart({ cart, updateCart }) {
  function calculTotal() {
    let total = 0;
    cart.forEach((icecream) => {
      total += icecream.price * icecream.amount;
    });
    return total.toFixed(2);
  }
  return (
    <div className="col-xl-3">
      <div className="mt-3 mb-5 cart">
        <div className="">
          <h3 className=" d-flex align-items-center justify-content-center">
            <img className="mr-5" alt="panier icone" src={cartImg} />
            Panier
          </h3>
        </div>

        {cart.map((data) => (
          <div key={data.name} className="font-weight-light">
            x{data.amount} {data.name} {data.price.toFixed(2)} €
          </div>
        ))}
        <div className="lead">Total : {calculTotal()} €</div>

        {calculTotal() > 0 && (
          <div>
            <button
              className="cart-btn btn-dark  btn"
              onClick={() => updateCart([])}
            >
              Vider le panier
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Cart;
