import ItemCard from "../../components/ItemCard";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import pic4 from "../../assets/pic4.jpg";
import pic5 from "../../assets/pic5.jpg";

const MaleAttire = () => {
  const item = {
    name: "Men's Hoodie",
    imgPath: pic1,
    price: "1000",
    images: [pic1, pic2, pic3, pic4, pic5],
  };
  return (
    <>
      <div className="main-container">
        <ItemCard {...item} />
        <ItemCard {...item} />
      </div>
    </>
  );
};

export default MaleAttire;
