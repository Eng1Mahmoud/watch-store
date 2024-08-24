"use client";
import { images } from "./data/Images";
import Image from "next/image";
import { Slider } from "./imagesSlider/Slider";
import { useState } from "react";
import GalleryDialog from "./imagesSlider/GalleryDialog";

const ShowImages = () => {
  const [hiddenDialog, setHiddenDialog] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0); // State to track the current slide

  // Handle image click to show dialog with slider
  const handleImageClick = (index: number) => {
    setCurrentSlide(index); // Set the clicked image as the current slide
    setHiddenDialog(false);
  };

  // Handle close dialog
  const handleCloseDialog = () => {
    setHiddenDialog(true);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image?.id}>
            <Image
              src={image?.src}
              alt={image?.alt}
              className="h-full w-full cursor-pointer"
              onClick={() => handleImageClick(image?.id)} // Pass the index of the clicked image
            />
          </div>
        ))}
      </div>
      {hiddenDialog ? null : (
        <GalleryDialog
          hiddenDialog={hiddenDialog}
          Content={() => <Slider initialSlide={currentSlide} />} // Pass the current slide to the slider
          onClose={handleCloseDialog}
        />
      )}
    </div>
  );
};

export default ShowImages;
