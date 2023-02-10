import React from "react";
import ItemCard from "../../SherdComponent/ItemCard/ItemCard";

const Shop = () => {
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
      _id: "5225df2255",
    },
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
      _id: "5225df2255",
    },
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
      _id: "5225df2255",
    },
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
    <section className="mb-12">
      <div className="my-8">
        <h3 className="text-3xl font-medium">All Items</h3>
        <h6 className="text-lg font-medium">551 items is abatable</h6>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {itemData.map((data) => (
          <ItemCard key={data._id} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
