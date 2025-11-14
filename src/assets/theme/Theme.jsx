import React from "react";
import { useTheme } from "./themeprovider";

function Theme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">Burger Haven</div>
                <div>
                    <a href="#Home" className="text-gray-300 hover:text-white mx-4 hover:bg-black hover:rounded-2xl hover:w-[250px] transition-all duration-200 ease-in-out p-2">Home</a>
                    <a href="#Menu" className="text-gray-300 hover:text-white mx-4  hover:bg-black hover:rounded-2xl hover:w-[250px] transition-all duration-200 ease-in-out p-2">Menu</a>
                    <a href="#order" className="text-gray-300 hover:text-white mx-4  hover:bg-black hover:rounded-2xl hover:w-[250px] transition-all duration-200 ease-in-out p-2">Order</a>
               <button
        onClick={toggleTheme}
        className="px-6 py-3 bg-amber-950 hover:bg-amber-900 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
                </div>
               
            </div>
            
        </nav>
    
      
</div>
  );
}

export default Theme;
