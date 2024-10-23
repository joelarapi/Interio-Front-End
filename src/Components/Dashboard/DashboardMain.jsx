import classes from "./DashboardMain.module.css";
import loopIcon from "../../icons/search-loop-icon.png";
import { Link } from "react-router-dom";
import placeholderImage from "../../icons/placeholder-image-for-posts.png";
import { useNavigate } from "react-router-dom";
import SponsoredPosts from "./SponsoredPosts";

const DashboardMain = () => {
  const navigate = useNavigate();


  const handleGoToApplication = () => {
    navigate("/post/:id");
  };

  return (
    <div className={classes.sideMain}>
      <div className={classes.mainContent}>
        <div className={classes.searchBar}>
          <img src={loopIcon} />
          <input type="search" placeholder="Search for job Offers..." />
        </div>

        <div className={classes.banner}>
          <div className={classes.bannerDiv}>
            <img src="/banner-image-1.png"/>
            <p>Find your best clients by saving your time</p>
          </div>

          <img src="/banner-image-2.png"/>
        </div>

        <div className={classes.section}>
          <div className={classes.headline}>
            <p>Sponsored</p>
            <Link>Show More</Link>
          </div>
          <SponsoredPosts/>

           
          <div className={classes.headline}>
            <p>Suggested for you</p>
            <Link>Show More</Link>
          </div>
            <div className={classes.cardSection} >
              <div className={classes.card}>
                <img src={placeholderImage} />
                <div className={classes.description}>
                  <h2>Request Title</h2>
                  <p className={classes.postTime}>9 hours ago | Category</p>
                  <p className={classes.location}>Location</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do...
                  </p>
                  <button onClick={handleGoToApplication}>Apply</button>
                </div>
              </div>

              <div className={classes.card}>
                <img src={placeholderImage} />
                <div className={classes.description}>
                  <h2>Request Title</h2>
                  <p className={classes.postTime}>9 hours ago | Category</p>
                  <p className={classes.location}>Location</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do...
                  </p>
                  <button>Apply</button>
                </div>
              </div>

              <div className={classes.card}>
                <img src={placeholderImage} />
                <div className={classes.description}>
                  <h2>Request Title</h2>
                  <p className={classes.postTime}>9 hours ago | Category</p>
                  <p className={classes.location}>Location</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do...
                  </p>
                  <button>Apply</button>
                </div>
              </div>
            </div>


            <div className={classes.headline}>
            <p>Newest</p>
            <Link>Show More</Link>
          </div>
            <div className={classes.cardSection} >
              <div className={classes.card}>
                <img src={placeholderImage} />
                <div className={classes.description}>
                  <h2>Request Title</h2>
                  <p className={classes.postTime}>9 hours ago | Category</p>
                  <p className={classes.location}>Location</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do...
                  </p>
                  <button onClick={handleGoToApplication}>Apply</button>
                </div>
              </div>

              <div className={classes.card}>
                <img src={placeholderImage} />
                <div className={classes.description}>
                  <h2>Request Title</h2>
                  <p className={classes.postTime}>9 hours ago | Category</p>
                  <p className={classes.location}>Location</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do...
                  </p>
                  <button>Apply</button>
                </div>
              </div>

              <div className={classes.card}>
                <img src={placeholderImage} />
                <div className={classes.description}>
                  <h2>Request Title</h2>
                  <p className={classes.postTime}>9 hours ago | Category</p>
                  <p className={classes.location}>Location</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do...
                  </p>
                  <button>Apply</button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
