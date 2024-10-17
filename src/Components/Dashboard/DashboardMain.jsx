import classes from "./Dashboard.module.css";
import loopIcon from "../../icons/search-loop-icon.png";

const DashboardMain = () => {
  return (
    <div className={classes.sideMain}>
      <div className={classes.mainContent}>
        <div className={classes.searchBar}>
          <img src={loopIcon} />
          <input type="search" placeholder="Search for job Offers..." />
        </div>

        <div>
          <div className={classes.headline}>
            <p>Recent Posts</p>
            <Link>Show More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
