import React from "react";
import classes from "./Dashboard.module.css";
import DashboardMain from "./DashboardMain";

const BusinessDashboard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.sideContainer}>
        <div className={classes.sideFiltersSection}>
          <h2>Category</h2>

          <div className={classes.filterSection}>
            <h3>Service Type</h3>
            <div>
              <input type="checkbox" />
              <label>Interior Design</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Furnitures</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Sanitarian</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Electricity</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Outdoor</label>
            </div>
          </div>

          <div className={classes.filterSection}>
            <h3>Location</h3>
            <div>
              <input type="checkbox" />
              <label>Tirana</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Durres</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Elbasan</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Vlora</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Shkoder</label>
            </div>
          </div>

          <div className={classes.filterSection}>
            <h3>Budget</h3>
            <div>
              <input type="checkbox" />
              <label>100-200</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Furnitures</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>200-500</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>500-1000</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>1000-5000</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>5000+</label>
            </div>
          </div>

          <div className={classes.filterSection}>
            <h3>Number of Offers</h3>
            <div>
              <input type="checkbox" />
              <label>Less than 5</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>5-10</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>10-20</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>20-50</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>+50</label>
            </div>
          </div>
        </div>
      </div>
      <DashboardMain />
    </div>
  );
};

export default BusinessDashboard;
