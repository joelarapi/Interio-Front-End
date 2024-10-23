import classes from "./Filters.module.css";
import { useState } from "react";
import arrowUp from '../../../public/arrow-up.png';
import arrowDown from '../../../public/arrow-down.png';


const Filters = () => {
  const [isServiceTypeOpen, setIsServiceTypeOpen] = useState(true);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);

  const categories = [
    "Interior Design",
    "Furnitures",
    "Sanitarian",
    "Electricity",
    "Outdoor",
  ];
  const locations = ["Tirana", "Durres", "Elbasan", "Vlora", "Shkoder"];
  const budgets = [
    "€100 - €200",
    "€200 - €500",
    "€500 - €1,000",
    "€1,000 - €5,000",
    "€5,000+",
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleServiceType = () => {
    setIsServiceTypeOpen(!isServiceTypeOpen);
  };

  const toggleLocation = () => {
    setIsLocationOpen(!isLocationOpen);
  };

  const toggleBudget = () => {
    setIsBudgetOpen(!isBudgetOpen);
  };

  const handleCheckboxChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((selected) => selected !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  return (
    <div className={classes.sideContainer}>
      <div className={classes.sideFiltersSection}>
        <h2>Filters</h2>

        <div className={classes.filterSection}>
          <button onClick={toggleServiceType} className={classes.dropdownBttn}>
            Service Type
            <span className={classes.arrow}>
              {isServiceTypeOpen ? <img src={arrowUp}/> : <img src={arrowDown}/>}
            </span>
          </button>

          {isServiceTypeOpen && (
            <ul className={classes.dropdownMenu}>
              {categories.map((category, index) => (
                <li key={index} className={classes.dropdownItem}>
                  <label>
                    <input
                      type="checkbox"
                      value={category}
                      onChange={() => handleCheckboxChange(category)}
                      checked={selectedCategories.includes(category)}
                    />
                    {category}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={classes.filterSection}>
          <button onClick={toggleLocation} className={classes.dropdownBttn}>
            Location{" "}
            <span className={classes.arrow}>
              {isLocationOpen ? <img src={arrowUp}/> : <img src={arrowDown}/>}
            </span>
          </button>
          {isLocationOpen && (
            <ul className={classes.dropdownMenu}>
              {locations.map((location, index) => (
                <li key={index} className={classes.dropdownItem}>
                  <label>
                    <input
                      type="checkbox"
                      value={location}
                      onChange={() => handleCheckboxChange(location)}
                      checked={selectedCategories.includes(location)}
                    />
                    {location}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={classes.filterSection}>
          <button onClick={toggleBudget} className={classes.dropdownBttn}>
            Budget
            <span className={classes.arrow}>
              {isBudgetOpen ?<img src={arrowUp}/> : <img src={arrowDown}/>}
            </span>
          </button>
          {isBudgetOpen && (
            <ul className={classes.dropdownMenu}>
              {budgets.map((budget, index) => (
                <li key={index} className={classes.dropdownItem}>
                  <label>
                    <input
                      type="checkbox"
                      value={budget}
                      onChange={() => handleCheckboxChange(budget)}
                      checked={selectedCategories.includes(budget)}
                    />
                    {budget}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filters;
