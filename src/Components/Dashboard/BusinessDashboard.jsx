import React from "react";
import classes from "./DashboardMain.module.css";
import DashboardMain from "./DashboardMain";
import Filters from "./Filters";

const BusinessDashboard = () => {
  return (
    <div className={classes.container}>
      <Filters/>
      <DashboardMain />
    </div>
  );
};

export default BusinessDashboard;
