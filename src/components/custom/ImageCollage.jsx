import React from "react";
import Image from "next/image";
import { Carousel, CarouselContent } from "../ui/carousel";

function ImageCollage({ individualCardData }) {
  return (
    <Carousel opts={{ dragFree: true }}>
      <CarouselContent className="w-full flex space-x-2 px-2">
        {individualCardData.images.map((image, index) => (
          <>
            {index % 4 === 0 && (
              <div className="h-[25vh] md:h-[48vh] w-[30vw] relative flex-shrink-0">
                <Image
                  src={image}
                  fill={true}
                  className="object-cover rounded-md"
                  alt={`${individualCardData.title} image ${index + 1}`}
                />
              </div>
            )}
            {index % 4 === 1 && (
              <div className="flex flex-col h-[24vh] md:h-[47vh] space-y-2">
                <div className="h-1/2 w-[35vw] relative flex-shrink-0">
                  <Image
                    src={image}
                    fill={true}
                    className="object-cover rounded-md"
                    alt={`${individualCardData.title} image ${index + 1}`}
                  />
                </div>
                <div className="h-1/2 w-[35vw] relative flex-shrink-0">
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
              <div className="h-[25vh] md:h-[48vh] w-[40vw] relative flex-shrink-0">
                <Image
                  src={image}
                  fill={true}
                  className="object-cover rounded-md"
                  alt={`${individualCardData.title} image ${index + 1}`}
                />
              </div>
            )}
          </>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default ImageCollage;
