import "../styles/SeasonalHits.css";
import { Link } from "react-router-dom";

interface SeasonalHitsProps {
  header1: String;
  header2: String;
}

const SeasonalHits = ({ header1, header2 }: SeasonalHitsProps) => {
  console.log(header1, header2);

  return (
    <>
      <div className="seasonal-container">
        <div style={{ display: "flex", flexDirection: "row", gap: "40em" }}>
          <Link to="/Regale/maleSection" style={{ color: "black" }}>
            <div className="seasonal-header">{header1}</div>
          </Link>
          <Link to="/Regale/maleSection" style={{ color: "black" }}>
            <div className="seasonal-header">{header2}</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SeasonalHits;
