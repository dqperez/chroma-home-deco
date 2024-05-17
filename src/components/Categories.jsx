import React, { useState } from 'react';
import CategButton from "../components/CategButton"
import chair from '../assets/chair.png';
import table from '../assets/table.png';
import armchair from '../assets/armchair.png';
import bed from '../assets/bed.png';
import popular from '../assets/popular.png';


const Categories = ({ onCategoryChange }) => {
    const [chosenCategory, setChosenCategory] = useState('');

    const handleCategoryClick = (category) => {
      if (chosenCategory === category) {
        setChosenCategory('');
        onCategoryChange(category);
      } else {
        setChosenCategory(category);
        onCategoryChange(category); // Call the function passed from the parent
        console.log("Selected Category:", category); 
      }
    };

    const popSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      );
      
  return (
    <div className="flex flex-row justify-center w-auto space-x-4 rounded-xl  p-4">
        <CategButton
          png={popular}
          title="Popular"
          onClick={() => handleCategoryClick("popular")}
          isActive={chosenCategory === "popular"}
        />
        <CategButton
          png={chair}
          title="Chair"
          onClick={() => handleCategoryClick("chair")}
          isActive={chosenCategory === "chair"}
        />
        <CategButton
          png={table}
          title="Table"
          onClick={() => handleCategoryClick("table")}
          isActive={chosenCategory === "table"}
        />
        <CategButton
          png={armchair}
          title="Armchair"
          onClick={() => handleCategoryClick("armchair")}
          isActive={chosenCategory === "armchair"}
        />
        <CategButton
          png={bed}
          title="Bed"
          onClick={() => handleCategoryClick("bed")}
          isActive={chosenCategory === "bed"}
        />
    </div>
  )
}

export default Categories;
