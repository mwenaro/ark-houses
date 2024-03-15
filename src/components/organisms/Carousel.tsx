"use client";
import { useCallback, useEffect, useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Img } from "..";

interface CarouselProps {
  images: { _id: string; src: string; alt: string }[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleNextSlide = useCallback(() => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  }, [currentSlide, images.length]);

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNextSlide();
    }, 30000); // Slide every 30 seconds

    return () => {
      clearInterval(slideInterval); // Clear the interval when the component unmounts
    };
  }, [currentSlide, handleNextSlide]);

  const heightClasses = "min-h-fit h-[20vh] sm:h-[50vh] md:h-[80vh]";
  return (
    <div className="relative w-full border border-solid ">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-2xl md:text-5xl  inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />
      <div className="w-full  flex overflow-hidden relative m-auto">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 w-full h-full  mx-0 px-0"
        >
          {images.map((image, index) => {
            if (index === currentSlide) {
              return (
                <Img
                  key={image._id}
                  src={
                    image.src.includes("default")
                      ? `/assets/defaults/${image.src}`
                      : image.src.includes("http")
                      ? image.src
                      : `/uploads/${image.src}`
                  }
                  alt={image.src}
                  className=" ease animate-fadeIn  w-full aspect-ratio"
                />
              );
            }
            return null; // Add this line to avoid a warning about missing return
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-2xl md:text-5xl  inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />

      <div className="relative sm:flex justify-center p-2 hidden ">
        {images.map((_, index) => (
          <div
            className={
              index === currentSlide
                ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
            }
            key={index}
            onClick={() => {
              setCurrentSlide(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}
