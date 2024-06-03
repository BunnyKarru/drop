import React, { useState } from "react";
import Header from "./Header";
import Product from "./ProductCard";

const HomePage = () => {
  const [products,setProducts] = useState([
    { name: "floral rusky shirt men", img: "floral", price: "990" ,type : 'men' },
    { name: "olive champion men", img: "olive", price: "550",type : 'men' },
    {
      name: "Limitless blue men",
      img: "limitless",
      price: "450",
      type : 'men'
    },
    { name: "play grafiti print T shirt Kids", img: "play", price: "1200",type : 'women' },
    {
      name: "marvel T shirt kids",
      img: "marvel",
      price: "1400",
      type : 'women'
    },
    { name: "Lightning MCQueen T shirt kids", img: "mcqueen", price: "1400",type : 'women' },
    { name: "Good Vibes T shirt UniSex", img: "good", price: "1100",type : 'unisex' },
    {
      name: "Mushroom Stay Groovy Cottagecore Shirt UniSex",
      img: "stay",
      price: "1400",
      type : 'unisex'
    },
    { name: "Lost in Space UniSex", img: "lost", price: "1400" ,type : 'unisex' },
  ]);
  const bgStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1671972710805-77e2e938fa07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '600px',
  
    // Set the height as per your requirement
  };

  return (
  <>
    <div style={bgStyle} className="relative">

   
    
    </div>



     <main className="container mx-auto py-6 px-4">
        <div className="flex flex-wrap justify-center">
          {products.map((product, index) => (
            <Product
              key={index}
              image={product.img}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </main>
  </>
);
};

export default HomePage;
