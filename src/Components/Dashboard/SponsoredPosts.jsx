import classes from "./SponsoredPosts.module.css";
import sponsor1 from "./sponsored-icons/sponsor-1.png";
import sponsor2 from "./sponsored-icons/sponsor-2.png";
import sponsor3 from "./sponsored-icons/sponsor-3.png";
import arrowLeft from "../../icons/left-arrow.png";
import arrowRight from "../../icons/right-arrow.png";
import { useRef } from "react";

const SponsoredPosts = () => {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.cardSectionWrapper}>
      <button
          className={classes.scrollButtonLeft}
          onClick={() => scroll(-342)} 
        >
          <img src={arrowLeft} alt="Scroll left" />
        </button>

        <div className={classes.sponsorSection} ref={scrollRef}>
          <div className={classes.sponsorTrack}>
            <div className={classes.sponsorItem}>
              <img src={sponsor1} alt="Sponsor 1" />
            </div>
            <div className={classes.sponsorItem}>
              <img src={sponsor2} alt="Sponsor 2" />
            </div>
            <div className={classes.sponsorItem}>
              <img src={sponsor3} alt="Sponsor 3" />
            </div>
            <div className={classes.sponsorItem}>
              <img src={sponsor1} alt="Sponsor 4" />
            </div>
          </div>
        </div>

        <button
          className={classes.scrollButtonRight}
          onClick={() => scroll(342)}
        >
          <img src={arrowRight} alt="Scroll right" />
        </button>
      </div>
    </div>
  );
};


export default SponsoredPosts;
