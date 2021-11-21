import icecreams from '../../datas/dataItem.js';
import '../../styles/btn.css';

function Category({ updateSort, updateVariationPrice, sort }) {
  let icecreamsSorted = icecreams.sort((a, b) => a.name.length - b.name.length);
  let categories = icecreamsSorted.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  return (
    <div className="col-12 mt-4 mb-4  rounded text-center">
      <div>
        <div
          onClick={() => updateSort([])}
          className="lead category-btn btn m-1"
        >
          Tout
        </div>
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => updateSort({ category })}
            className={
              sort.category === category
                ? 'category-btn btn bg-secondary text-light  m-1'
                : 'category-btn btn  m-1'
            }
          >
            {category}
          </div>
        ))}
      </div>
      <div
        onClick={() => updateVariationPrice(true)}
        className="lead btn category-price-btn m-1"
      >
        Prix croissants
      </div>
      <div
        onClick={() => updateVariationPrice(false)}
        className="lead btn category-price-btn m-1"
      >
        Prix décroissants
      </div>
    </div>
  );
}
export default Category;
