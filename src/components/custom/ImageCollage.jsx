"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Carousel, CarouselContent } from "../ui/carousel";
import Modal from "./Modal";
import { usePathname } from "next/navigation";

const ImageCollage = ({ individualCardData }) => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (image, index) => {
    setCurrentIndex(index);
    setClickedImg(image);
  };

  const handleRotationRight = () => {
    const totalLength = individualCardData.images.length;
    const newIndex = (currentIndex + 1) % totalLength;
    setClickedImg(individualCardData.images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handleRotationLeft = () => {
    const totalLength = individualCardData.images.length;
    const newIndex = (currentIndex - 1 + totalLength) % totalLength;
    setClickedImg(individualCardData.images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const pathName = usePathname();

  return (
    <>
      <Carousel opts={{ dragFree: true }}>
        <CarouselContent className="w-full flex space-x-2 px-2">
          {individualCardData.images.map((image, index) => (
            <React.Fragment key={index}>
              {index % 4 === 0 && (
                <div
                  className={`h-[25vh] w-[40vw] ${
                    pathName === "/districts/all" ||
                    pathName === "/workshop/all" ||
                    pathName === "/events/all" ||
                    pathName === "/artisan/jobPortal/all"
                      ? " md:h-[40vh] md:w-[25vw] "
                      : " md:h-[55vh] "
                  } relative flex-shrink-0 cursor-pointer`}
                  onClick={() => handleClick(image, index)}
                >
                  <Image
                    src={image}
                    fill={true}
                    className="object-cover rounded-md"
                    alt={`${individualCardData.title} image ${index + 1}`}
                  />
                </div>
              )}
              {index % 4 === 1 && (
                <div
                  className={`flex flex-col h-[24vh] ${
                    pathName === "/districts/all" ||
                    pathName === "/workshop/all" ||
                    pathName === "/events/all" ||
                    pathName === "/artisan/jobPortal/all"
                      ? " md:h-[39vh]"
                      : "md:h-[54vh]"
                  } space-y-2`}
                >
                  <div
                    className={`h-1/2 ${
                      pathName === "/districts/all" ||
                      pathName === "/workshop/all" ||
                      pathName === "/events/all" ||
                      pathName === "/artisan/jobPortal/all"
                        ? "w-[40vw] md:w-[25vw]"
                        : "w-[35vw]"
                    } relative flex-shrink-0 cursor-pointer`}
                    onClick={() => handleClick(image, index)}
                  >
                    <Image
                      src={image}
                      fill={true}
                      className="object-cover rounded-md"
                      alt={`${individualCardData.title} image ${index + 1}`}
                    />
                  </div>
                  <div
                    className={`h-1/2 ${
                      pathName === "/districts/all" ||
                      pathName === "/workshop/all" ||
                      pathName === "/events/all" ||
                      pathName === "/artisan/jobPortal/all"
                        ? "w-[40vw] md:w-[25vw]"
                        : "w-[35vw]"
                    } relative flex-shrink-0 cursor-pointer`}
                    onClick={() =>
                      handleClick(
                        individualCardData.images[
                          (index + 1) % individualCardData.images.length
                        ],
                        (index + 1) % individualCardData.images.length
                      )
                    }
                  >
                    <Image
                      src={
                        individualCardData.images[
                          (index + 1) % individualCardData.images.length
                        ]
                      }
                      fill={true}
                      className="object-cover rounded-md"
                      alt={`${individualCardData.title} image ${index + 2}`}
                    />
                  </div>
                </div>
              )}
              {index % 4 === 3 && (
                <div
                  className={`h-[25vh] w-[40vw] ${
                    pathName === "/districts/all" ||
                    pathName === "/workshop/all" ||
                    pathName === "/events/all" ||
                    pathName === "/artisan/jobPortal/all"
                      ? " md:h-[40vh] md:w-[25vw] "
                      : " md:h-[55vh] "
                  } relative flex-shrink-0 cursor-pointer`}
                  onClick={() => handleClick(image, index)}
                >
                  <Image
                    src={image}
                    fill={true}
                    className="object-cover rounded-md"
                    alt={`${individualCardData.title} image ${index + 1}`}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </CarouselContent>
      </Carousel>

      {clickedImg && (
        <Modal
          clickedImg={clickedImg}
          setClickedImg={setClickedImg}
          handelRotationRight={handleRotationRight}
          handelRotationLeft={handleRotationLeft}
        />
      )}
    </>
  );
};

export default ImageCollage;
