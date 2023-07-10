import React, { useState } from 'react';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = await response.json();
      setResults(data.meals);
    } catch (error) {
      console.error(error);
    }
  };
    const searchDelete = ()=>{
      setSearchTerm('')
    }
  return (
    <>
    <section>
    <div className="headerContainer">
    <input
        className='inputSearch'
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className='buttonSearch' onClick={handleSearch}>Search</button>
      <button onClick={searchDelete} className='buttonDelete'>Delete</button>

        <div className="searchContent">
      { searchTerm &&(results.map((meal) => (
        <div key={meal.idMeal}>
          <img className='photoSearch BackGround' width={280} src={meal.strMealThumb} alt={meal.strMeal} />
          <p className='SearchP'>{meal.strMeal}</p>
        </div>
      )))}
        </div>
        <div className="borderBottom"></div>

    </div>
    </section>
    </>
  );
}

export default Search;