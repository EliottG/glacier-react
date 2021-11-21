import img from '../../assets/logo.png';
import '../../styles/header.css';
function Header() {
  return (
    <div className="m-auto banner">
      <div className="">
        <h1 className=" display-3">Semaglace</h1>
        <h3 className="lead text-center">Artisan glacier</h3>
      </div>
      <img className="" alt="icecream logo" src={img} />
    </div>
  );
}
export default Header;
