import DashboardMain from "./DashboardMain";
<<<<<<< Updated upstream
import Filters from "./Filters"
import classes from "./DashboardMain.module.css";

const BusinessDashboard = () => {
  return (
    <div>
=======
import Filters from "./Filters";
import Footer from "../footer";

const BusinessDashboard = () => {
  return (
    <>
        <div className={classes.container}>
>>>>>>> Stashed changes
      <Filters/>
      <DashboardMain className={classes.businessDashboard}/>
    </div>
<<<<<<< Updated upstream
  )
}
=======
    <Footer/>
    </>

  );
};
>>>>>>> Stashed changes

export default BusinessDashboard;