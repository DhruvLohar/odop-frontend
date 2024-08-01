import React from "react";

const brochureData = {
  logo: "/img/ODOP1.png",
  title: "ONE DISTRICT ONE PRODUCT",
  introduction: {
    text: "Lorem ipsum dolor sit amet consectetur. Non risus sed morbi facilisis sagittis eget id. Risus mi urna elementum tristique maecenas aliquam nulla. Aliquam morbi vulputate integer interdum ut in quis. Consectetur aliquam quisque leo cras elementum vestibulum tristique tincidunt. Faucibus proin fermentum odio libero. Sit sapien nascetur egestas quis consectetur ut. Sit enim aenean diam enim donec fermentum. At auctor urna vitae adipiscing. Aliquet feugiat augue nibh nec lorem amet. Tellus tellus urna tempor mauris nibh ornare quam suspendisse. Ut nullam diam eget massa nulla risus.",
    image: "/img/ODOP2.png",
  },
  storeInfo: {
    phone: "9898989898",
    address: "12, Near this near that, Bihar - 400000",
    storefront: "/img/Rectangle3.png",
    map: "/img/Rectangle2.png",
  },
  productCategories: [
    {
      name: "Belts",
      description:
        "Lorem ipsum dolor sit amet consectetur. Non risus sed morbi facilisis sagittis eget id. Risus mi urna elementum tristique maecenas aliquam nulla. Aliquam morbi vulputate integer interdum ut in quis. Consectetur aliquam quisque leo cras elementum vestibulum tristique tincidunt. Faucibus",
      image: "/img/Rectangle4.png",
    },
    {
      name: "Watch Belts",
      description:
        "Lorem ipsum dolor sit amet consectetur. Non risus sed morbi facilisis sagittis eget id. Risus mi urna elementum tristique maecenas aliquam nulla. Aliquam morbi vulputate integer interdum ut in quis. Consectetur aliquam quisque leo cras elementum vestibulum tristique tincidunt. Faucibus",
      image: "/img/Rectangle5.png",
    },
  ],
  carousel: {
    img1: "/img/Rectangle10.png",
    img2: "/img/Rectangle11.png",
    img3: "/img/Rectangle11.png",
    img4: "/img/Rectangle10.png",
  },
  materialsAndCraftsmen: {
    text: "Lorem ipsum dolor sit amet consectetur. Non risus sed morbi facilisis sagittis eget id. Risusssss mi urna elementum tristique maecenas aliquam nulla. Aliquam morbi vulputate integer interdsssum ut in quis. Consectetur aliquam quisque leo cras elementum vestibulum tristique tincidunt. Faucibus proin sssa mentum odio libero. Sit sapien nascetur egestas quis consectetur ut. Sit enim aenean diam enim donec fermentum. At auctor urna vitae adipiscing. Aliquet feugiat augue nibh nec lorem amet. Tellus",
    image: "/img/Rectangle9.png",
  },
};

const ODOPBrochure = () => {
  return (
    <div className="w-full h-full font-sans overflow-auto">
      <div className="w-full bg-white p-4 md:p-8 overflow-hidden">
        <div className="flex w-full justify-center mb-4  pb-2">
          <img
            src={brochureData.logo}
            alt="ODOP Logo"
            className="h-8 md:h-20"
          />
        </div>
        <div className="h-[1px] w-full bg-black"></div>

        <div className="text-start">
          <h2 className="text-3xl md:text-5xl  font-bold text-[#0a2c5c] mt-2">
            Introduction
          </h2>
          <div className="flex flex-row gap-4 mb-4 items-center">
            <div className="w-full text-black md:w-2/3 flex  p-4">
              <p className="text-basic md:text-xl text-left">
                {brochureData.introduction.text}
              </p>
            </div>

            <div className="w-full md:w-1/3 aspect-w-1 aspect-h-1 flex items-center">
              <img
                src={brochureData.introduction.image}
                alt="Belt"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="flex  gap-4 mb-4 ">
          <div className="relative h-[45vh] md:h-[60vh] w-1/2 aspect-w-1 aspect-h-1">
            <img
              src={brochureData.storeInfo.storefront}
              alt="Store Front"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col w-1/2  ">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0a2c5c] mb-2">
              Store Info
            </h2>
            <div className="h-[1px] w-[95%] bg-black mb-4"></div>
            <p className="text-basic text-black md:text-xl mb-2">
              Ph No.: {brochureData.storeInfo.phone}
            </p>
            <p className="text-basic text-black md:text-xl mb-4">
              Address: {brochureData.storeInfo.address}
            </p>
            <img
              src={brochureData.storeInfo.map}
              alt="Map"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="h-[1px] w-full my-10 bg-black"></div>

        <h2 className="text-3xl md:text-5xl font-bold text-[#0a2c5c] mb-8 mt-3 text-center">
          Product Categories
        </h2>
        <div className="flex flex-col gap-8 mb-8">
          {brochureData.productCategories.map((product, index) => (
            <div key={index} className="flex items-center justify-center">
              {index % 2 === 0 ? (
                <>
                  <div className="flex w-full justify-center items-center aspect-w-1 aspect-h-1">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-contain  rounded-lg "
                    />
                  </div>
                  <div className="w-full">
                    <h3 className="font-bold text-xl  md:text-3xl text-[#0a2c5c] mb-2">
                      {product.name}
                    </h3>
                    <p className="text-left text-basic md:text-xl text-gray-700">
                      {product.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full">
                    <h3 className="font-bold text-xl md:text-3xl text-[#0a2c5c] mb-2">
                      {product.name}
                    </h3>
                    <p className="text-left text-basic md:text-xl text-gray-700">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex w-full justify-center items-center aspect-w-1 aspect-h-1">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover rounded-lg "
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="relative grid grid-cols-2 ">
          <div className="absolute text-black inset-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white rounded-full h-24 w-24 p-2">
            pure Khadi
          </div>

          <img
            src={brochureData.carousel.img1}
            alt="Photo 1"
            className="w-full h-auto"
          />
          <img
            src={brochureData.carousel.img2}
            alt="Photo 2"
            className="w-full h-auto"
          />
          <img
            src={brochureData.carousel.img3}
            alt="Photo 3"
            className="w-full h-auto"
          />
          <img
            src={brochureData.carousel.img4}
            alt="Photo 4"
            className="w-full h-auto"
          />
        </div>
        <div className="h-[1px] w-full bg-black my-10 mt-5"></div>

        <h2 className="text-3xl md:text-5xl text-center font-bold text-[#0a2c5c] mb-4 mt-4">
          Materials and Craftsmen
        </h2>
        <div className="flex flex-col  gap-4">
          <div className="w-full h-40">
            <img
              src={brochureData.materialsAndCraftsmen.image}
              alt="Craftsman"
              className="object-contain w-full"
            />
          </div>
          <p className="w-full text-black text-base md:text-xl">
            {brochureData.materialsAndCraftsmen.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ODOPBrochure;
