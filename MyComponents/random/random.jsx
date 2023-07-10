import React, { useState } from 'react';

function Random() {
  const [meal, setMeal] = useState(null);
  const [deleteRandom, setDeleteRandom] = useState(false)

  const fetchRandomMeal = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setMeal(data.meals[0]);
      setDeleteRandom(true)
    } catch (error) {
      console.error(error);
    }
  };
  const RandomDelete = async ()=>{
      setDeleteRandom(false)
  }
  return (
    <>
    
        <div className="randomContainer">
        <div>
        <button className='randomButton' onClick={fetchRandomMeal}>Get Random Meal</button>
        <button onClick={RandomDelete} className='deleteRandom'>Delete</button>
        {deleteRandom && (
            <div className='divRandom'> 
            <img className='randomPhoto BackGround' width={450} src={meal.strMealThumb} alt={meal.strMeal} />
            <div>
            <h2>{meal.strMeal}</h2>
            <p className='randomP'>{meal.strInstructions}</p>
            </div>
            </div>
        )}
    </div>
        </div>
        <div className="headerContainer">
        <div className="borderBottom"></div>
        </div>

    </>
  );
}

export default Random;