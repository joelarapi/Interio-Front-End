import DashboardMain from "./DashboardMain";
import Filters from "./Filters";


const BusinessDashboard = () => {
  return (
    
        <div className={classes.container}>
      <Filters/>
      <DashboardMain className={classes.businessDashboard}/>
    </div>


  );
};

export default BusinessDashboard;