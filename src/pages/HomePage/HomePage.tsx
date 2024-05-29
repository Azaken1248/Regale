import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import SeasonalHits from "../../components/SeasonalHits";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <SeasonalHits header1={"For Him"} header2={"For Her"} />
      <Footer />
    </>
  );
};

export default HomePage;
