import "../styles/Categorie.css";
import { plantList } from "../datas/plantList";

function Categorie({ Category, setCategory }) {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  const HandleCategory = (e) => {
    setCategory(e.target.value)
  };

  return (
    <div class="lmj-plant-list-sort">
      <div class="lmj-plant-list-sort-wrapper">
        <label for="Caterogy_plant">Categorie</label>
        <select
          key="select-category"
          id="Caterogy_plant"
          name="category"
          onChange={(e) => {
            HandleCategory(e);
          }}
        >
          <option key="default-option">Tout</option>
          {categories.map((item) => {
            return <option key={`${item}-option`}>{item}</option>;
          })}
        </select>
      </div>
    </div>
  );
}
export default Categorie;
