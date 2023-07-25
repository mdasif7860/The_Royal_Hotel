import React, { useState } from "react";
import { AiOutlineWifi } from "react-icons/ai";
import { GiTowel,} from "react-icons/gi";
import {LuCigaretteOff} from "react-icons/lu"
import { MdOutlineSecurity, MdLuggage, MdBathroom } from "react-icons/md";
import {Link} from "react-router-dom";
const RoomSection = ({heading,para,dollar,image1,image2,image3,image4,lClass}) => {

  const [selectedImage, setSelectedImage] = useState(null);
  const defaultImage = image1;

  const smallImages = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
  ];
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className={lClass}>
      <div className="room_section_image">
        {selectedImage ? (
          <img
            src={selectedImage.src}
            className="large_image"
            alt="Large Image"
          />
        ) : (
          <img src={defaultImage} className="large_image" alt="Large Image" />
        )}
        <div className="small_images">
          {smallImages.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt="Small Image"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </div>
      <div className="room_section_content">
        <h1 className="royal">{heading}</h1>
        <p className="gray">
          {para}<span className="dollar"> {dollar}</span>.
        </p>
        <div className="facilities">
          <div className="facility">
            <div className="f-icon">
              <AiOutlineWifi />
            </div>
            <li>Wifi</li>
          </div>
          <div className="facility">
            <div className="f-icon">
              <GiTowel />
            </div>
            <li>Housekeeping</li>
          </div>
          <div className="facility">
            <div className="f-icon">
              <MdOutlineSecurity />
            </div>
            <li>24-Hour Security</li>
          </div>
          <div className="facility">
            <div className="f-icon">
              <MdLuggage />
            </div>
            <li>Luggage Storage</li>
          </div>
          <div className="facility">
            <div className="f-icon">
              <LuCigaretteOff />
            </div>
            <li>No Smooking</li>
          </div>
          <div className="facility">
            <div className="f-icon">
              <MdBathroom />
            </div>
            <li>Luxary Bathroom</li>
          </div>
        </div>
        <Link to="/contact">
        <button>Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default RoomSection;
