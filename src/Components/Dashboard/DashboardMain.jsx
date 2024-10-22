import classes from "./Dashboard.module.css";
import loopIcon from "../../icons/search-loop-icon.png";
import { Link } from "react-router-dom";
import placeholderImage from "../../icons/placeholder-image-for-posts.png";
import { useRef } from "react";
import arrowLeft from '../../icons/left-arrow.png'
import arrowRight from '../../icons/right-arrow.png'
import { useNavigate } from "react-router-dom";

const DashboardMain = () => {

  const navigate = useNavigate()
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
      console.log("ScrollLeft:", scrollRef.current.scrollLeft);
    }
  };

  const handleGoToApplication = () =>{
    navigate('/post/:id')
  }


  return (
    <div className={classes.sideMain}>
      <div className={classes.mainContent}>
        <div className={classes.searchBar}>
          <img src={loopIcon} />
          <input type="search" placeholder="Search for job Offers..." />
        </div>

        <div className={classes.section}>
          <div className={classes.headline}>
            <p>Sponsored</p>
            <Link>Show More</Link>
          </div>

          <div className={classes.cardSectionWrapper}>
            <button
              className={classes.scrollButtonLeft}
              onClick={() => scroll(-336)}
            >
              <img src={arrowLeft}/>
            </button>

            <div className={classes.cardSection} ref={scrollRef}>
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

            <button
                className={classes.scrollButtonRight}
                onClick={() => scroll(336)}
              >
                <img src={arrowRight}/>
              </button>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
