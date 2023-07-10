import React, { useState } from 'react';

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const Alphabet = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [meals, setMeals] = useState([]);

  const handleLetterClick = async (letter) => {
    setSelectedLetter(letter);
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
      const data = await response.json();
      setMeals(data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='headerContainer'>
      {selectedLetter && (
        <div className="meals">
          {meals.map((meal) => (
            <div key={meal.idMeal}>
              <img width={250} src={meal.strMealThumb} alt={meal.strMeal} />
              <h3 className='mealsText'>{meal.strMeal}</h3>
            </div>
          ))}
        </div>
      )}
      <div className="letters">
        {letters.map((letter) => (
          <div>
            <h2 className='h2Hover' key={letter} onClick={() => handleLetterClick(letter)}>
            {letter}
          </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alphabet;