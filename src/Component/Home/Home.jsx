import { Button } from "flowbite-react";
import React from "react";
import CarouselBox from "./Carousel/CarouselBox";
import ItemCard from "../../SherdComponent/ItemCard/ItemCard";
import { Link } from "react-router-dom";

const Home = () => {
  //  ======================================================================= Test Remove data >>>>>
  const itemData = [
    {
      image:
        "https://static-01.daraz.com.bd/p/c22091b4358394d9d16ebb618f041295.jpg",
      title: "Black Leather Wallet with Mobile Cover for Men",
      price: 500,
      _id: "5225df2255",
    },
    {
      image:
        "https://static-01.daraz.com.bd/p/c22091b4358394d9d16ebb618f041295.jpg",
      title: "Black Leather Wallet with Mobile Cover for Men",
      price: 500,
      _id: "5225d2255",
    },
    {
      image:
        "https://static-01.daraz.com.bd/p/c22091b4358394d9d16ebb618f041295.jpg",
      title: "Black Leather Wallet with Mobile Cover for Men",
      price: 500,
      _id: "5225dfd2255",
    },
  ];

  return (
    <section>
      <CarouselBox />

      {/* Popular items seciton */}
      <div className="mb-7 md:mb-10">
        <h3 className="text-xl md:text-3xl font-medium mb-5 mt-8 pb-2 border-b-2 border-gray-500 inline-block">
          Popular Items
        </h3>

        {/* map card item  */}
        <div className="grid grid-cols-3 md:gap-10 justify-center mb-6">
          {itemData.map((data) => (
            <ItemCard key={data._id} data={data} />
          ))}
        </div>
        <Link to="/shop" className="flex justify-center">
          <Button color="light">Show All</Button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
