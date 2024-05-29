import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import SearchAppBar from "../../components/Navbar";
import SeasonalHits from "../../components/SeasonalHits";

const HomePage = () => {
  return (
    <>
      <SearchAppBar />
      <Carousel />
      <SeasonalHits header1={"For Him"} header2={"For Her"} />
      <Footer />
    </>
  );
};

export default HomePage;
