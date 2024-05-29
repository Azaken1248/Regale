import React, { useState } from "react";
import Modal from "react-modal";
import "../styles/ItemCard.css";

Modal.setAppElement("#root"); // Set the app root element for accessibility

interface ItemCardProps {
  name: string;
  imgPath: string;
  price: string;
  images: string[];
}

const ItemCard = ({ name, imgPath, price, images }: ItemCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, parseInt(event.target.value) || 1);
    setQuantity(value);
  };

  const addToCart = () => {
    console.log(`Added ${quantity} of ${name} to the cart.`);
    // Add the item to the cart logic here
  };

  const openModal = () => {
    if (images && images.length > 0) {
      setIsOpen(true);
    }
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="item-card">
        <div className="img-div" onClick={openModal}>
          <img src={imgPath} alt={name} />
        </div>
        <div className="info-div">
          <h1>{name}</h1>
          <span>Rs. {price}</span>
          <div className="quantity-controls">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
            />
          </div>
          <button className="add-to-cart-button" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Slideshow"
        className="modal"
        overlayClassName="overlay"
      >
        <button className="close-button" onClick={closeModal}>
          X
        </button>
        <div className="slideshow">
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
          />
        </div>
        <div className="buttons">
          <button onClick={prevImage} className="fb">
            ←
          </button>
          <button onClick={nextImage} className="fb">
            →
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ItemCard;
