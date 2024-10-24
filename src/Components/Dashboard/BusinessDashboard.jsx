import DashboardMain from "./DashboardMain";
import Filters from "./Filters"
import classes from "./DashboardMain.module.css";

const BusinessDashboard = () => {
  return (
    <div>
      <Filters/>
      <DashboardMain className={classes.businessDashboard}/>
    </div>
  )
}

export default BusinessDashboard;