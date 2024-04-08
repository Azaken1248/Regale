import SearchAppBar from "./Navbar.tsx";
import Carousel from "./Carousel.tsx";
import SeasonalHits from "./SeasonalHits.tsx";
import Footer from "./Footer.tsx";

function App() {
  return (
    <>
      <SearchAppBar />
      <Carousel />
      <SeasonalHits header={"Summer Hits"} />
      <Footer />
    </>
  );
}

export default App;
