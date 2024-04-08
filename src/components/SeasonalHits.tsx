import "../styles/SeasonalHits.css";

import title2 from "../assets/title2.jpg";
import title3 from "../assets/title3.jpg";

interface SeasonalHitsProps {
  header: String;
}

const SeasonalHits = ({ header }: SeasonalHitsProps) => {
  return (
    <>
      <div className="seasonal-container">
        <div className="seasonal-header">{header}</div>
        <img className="img-class" src={title2}></img>
        <img className="img-class" src={title3}></img>
      </div>
    </>
  );
};

export default SeasonalHits;
