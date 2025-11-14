import React, { useEffect } from "react";




const Child = (props) => {
    const handleAddToCart = () => {
    // ✅ Call the function passed from parent
    if (props.onAddToCart) {
      props.onAddToCart({
        imgSrc: props.imgSrc,
        name: props.name,
        about: props.about,
        price: props.price,
      });
       alert(`Added ${props.name} to your cart!`);
    } 
  };
  return (
  
  <div className="max-w-90 p-5 bg-white rounded-lg shadow-md border-gray-200 border-3 m-5 ">
  <div className="flex flex-col items-center">
    <img
      src={props.imgSrc}
      alt="Burger"
      className="w-32 h-32 object-contain rounded-full border-3 border-gray-300"
    />
    <h3 className="text-lg font-bold text-gray-600    mt-2">{props.name}</h3>
    <p className="text-gray-600 text-sm">{props.about}</p>
    <h4 className="text-xl font-bold text-shadow-red-950 text-amber-950 mt-2">${props.price}</h4>
    <button className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer" onClick={handleAddToCart}>
      Add to cart
    </button>
  </div>
</div>
  );
};

export default React.memo(Child);