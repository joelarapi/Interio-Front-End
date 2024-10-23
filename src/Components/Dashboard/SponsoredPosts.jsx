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
      console.log("ScrollLeft:", scrollRef.current.scrollLeft);
    }
  };
  return (
    <div className={classes.cardSectionWrapper}>
      <div className={classes.sponsorSection} ref={scrollRef}>
        <button
          className={classes.scrollButtonLeft}
          onClick={() => scroll(-336)}
        >
          <img src={arrowLeft} />
        </button>
        <img src={sponsor1} />
        <img src={sponsor2} />
        <img src={sponsor3} />
        <img src={sponsor1} />
        <button
          className={classes.scrollButtonRight}
          onClick={() => scroll(336)}
        >
          <img src={arrowRight} />
        </button>
      </div>
    </div>
  );
};

export default SponsoredPosts;
