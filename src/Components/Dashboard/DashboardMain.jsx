import classes from "./Dashboard.module.css";
import loopIcon from "../../icons/search-loop-icon.png";
import { Link } from "react-router-dom";
import placeholderImage from "../../icons/placeholder-image-for-posts.png";
import { useRef } from "react";

const DashboardMain = () => {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
      console.log("ScrollLeft:", scrollRef.current.scrollLeft);
    }
  };
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
              onClick={() => scroll(-316)}
            >
              &#8592;
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
                onClick={() => scroll(316)}
              >
                &#8594;
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
