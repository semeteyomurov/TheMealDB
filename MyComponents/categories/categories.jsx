import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [MenuPhoto, setMenuPhoto] = useState(true);
  const [idMeals, setIdMeals] = useState(false);
  const [idInfo, setIdInfo] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => {
        setCategories(response.data.categories);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleCategoryClick = (categoria) => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`)
      .then(response => {
        setMeals(response.data.meals)
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleIngredientClick = (idMeal) => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then(response => {
        setMeals(response.data.meals);
        setOpen(false)
      })
      .catch(error => {
        console.error("не работает");
      });
  };
  const IngridientClick = (index)=>{
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${index}`)
    .then((response) =>{
      setMeals(response.data.meals)
    }).catch(error =>{
      console.log('INGRIDIENT НЕ РАБОТАЕТ')
    })
  }
  useEffect(() => {
    console.log(meals);
  }, [meals]);

  const deleteCard = () => {
        setOpen(false)
        setIdInfo(false)
        setIdMeals(false)
        setMenuPhoto(true)
  };
  

  return (
    <>
      <section>
        <div className="sectionContainer">
          <button className='cardDelete' onClick={deleteCard}>delete</button>
          <div className="sectionContent">
            <div className="MenuPhoto">
              {MenuPhoto && (
                categories.map(meal => {
                  return (
                    <div key={meal.idCategory}>
                      <img onClick={() => {
                        handleCategoryClick(meal.strCategory);
                        setMenuPhoto(false);
                        setIdMeals(true);
                        setOpen(false)
                      }} className='PhotoMenu' width={250} src={meal.strCategoryThumb} alt="" />
                      <p className='NameCard'>{meal.strCategory}</p>
                    </div>
                  );
                })
              )}
              {idMeals && (
                meals.map(index => {
                  return (
                    <>
                      <div className='CardPhotoText' key={index.idMeal}>
                        <img className='BackGround' onClick={() => {
                          handleIngredientClick(index.idMeal);
                          setIdInfo(true);
                          setMenuPhoto(false);
                          setIdMeals(false);
                          setOpen(false)
                         }} width={250} src={index.strMealThumb} alt="" />
                        <p className='cardText'>{index.strMeal}</p>
                      </div>
                    </>
                  );
                })
              )}
              {idInfo && (
                meals.map(meal => (
                  <div key={meal.idMeal}>
                    <div className='infoDisplay'>
                    <div className='infoPhoto'>
                    <div>
                    <img className='photoInfo' src={meal.strMealThumb} alt={meal.strMeal} />
                    </div>
                    <div className='infoDiv'>
                    <p className='spanMp'>{meal.strMeal}</p>
                    <p className='infoP'>{meal.strInstructions}</p>
                    </div>
                    </div>
                    </div>
                    <div className='infoCard'>

                      {
                      meals.map((index)=>{
                        return(
                          <div className='DisplayGrid'>
                            <div>
                            <img onClick={()=>{IngridientClick(index.strIngredient1)
                            setIdInfo(false);
                            setMenuPhoto(false);
                            setOpen(true)
                            setIdMeals(false);
                            }} width={200} src={`https://www.themealdb.com/images/ingredients/${index.strIngredient1}.png`} alt="" />
                            <p className='fFize'>{index.strMeasure1}</p>
                          </div>
                          <div>
                            <img onClick={()=>{IngridientClick(index.strIngredient2)
                            setIdInfo(false);
                            setMenuPhoto(false);
                            setOpen(true)
                            setIdMeals(false);
                            }} width={200} src={`https://www.themealdb.com/images/ingredients/${index.strIngredient2}.png`} alt="" />
                            <p className='fFize'>{index.strMeasure2}</p>
                          </div>
                          <div>
                            <img onClick={()=>{IngridientClick(index.strIngredient3)
                            setIdInfo(false);
                            setMenuPhoto(false);
                            setOpen(true)
                            setIdMeals(false);
                            }} width={200} src={`https://www.themealdb.com/images/ingredients/${index.strIngredient3}.png`} alt="" />
                            <p className='fFize'>{index.strMeasure3}</p>
                          </div>
                          <div>
                            <img onClick={()=>{IngridientClick(index.strIngredient4)
                            setIdInfo(false);
                            setMenuPhoto(false);
                            setOpen(true)
                            setIdMeals(false);
                            }} width={200} src={`https://www.themealdb.com/images/ingredients/${index.strIngredient4}.png`} alt="" />
                            <p className='fFize'>{index.strMeasure4}</p>
                          </div>
                          <div>
                            <img onClick={()=>{IngridientClick(index.strIngredient5)
                            setIdInfo(false);
                            setMenuPhoto(false);
                            setOpen(true)
                            setIdMeals(false);
                            }} width={200} src={`https://www.themealdb.com/images/ingredients/${index.strIngredient5}.png`} alt="" />
                            <p className='fFize'>{index.strMeasure5}</p>
                          </div>
                          <div>
                            <img onClick={()=>{IngridientClick(index.strIngredient6)
                            setIdInfo(false);
                            setMenuPhoto(false);
                            setOpen(true)
                            setIdMeals(false);
                            }} width={200} src={`https://www.themealdb.com/images/ingredients/${index.strIngredient6}.png`} alt="" />
                            <p className='fFize'>{index.strMeasure6}</p>
                          </div>
                          <div>
                            <img onClick={()=>{IngridientClick(index.strIngredient7)
                            setIdInfo(false);
                            setMenuPhoto(false);
                            setOpen(true)
                            setIdMeals(false);
                            }} width={200} src={`https://www.themealdb.com/images/ingredients/${index.strIngredient7}.png`} alt="" />
                            <p className='fFize'>{index.strMeasure7}</p>
                          </div>
                          <div>
                            <img onClick={()=>{IngridientClick(index.strIngredient8)
                            setIdInfo(false);
                            setMenuPhoto(false);
                            setOpen(true)
                            setIdMeals(false);
                            }} width={200} src={`https://www.themealdb.com/images/ingredients/${index.strIngredient8}.png`} alt="" />
                            <p className='fFize'>{index.strMeasure8}</p>
                          </div>
                          <div>
                            <img onClick={()=>{IngridientClick(index.strIngredient9)
                            setIdInfo(false);
                            setMenuPhoto(false);
                            setOpen(true)
                            setIdMeals(false);
                            }} width={200} src={`https://www.themealdb.com/images/ingredients/${index.strIngredient9}.png`} alt="" />
                            <p className='fFize'>{index.strMeasure9}</p>
                          </div>
                          <div>
                            <img onClick={()=>{IngridientClick(index.strIngredient10)
                            setIdInfo(false);
                            setMenuPhoto(false);
                            setOpen(true)
                            setIdMeals(false);
                            }} width={200} src={`https://www.themealdb.com/images/ingredients/${index.strIngredient10}.png`} alt="" />
                            <p className='fFize'>{index.strMeasure10}</p>
                          </div>
                          <div>
                            <img onClick={()=>{IngridientClick(index.strIngredient11)
                            setIdInfo(false);
                            setMenuPhoto(false);
                            setOpen(true)
                            setIdMeals(false);
                            }} width={200} src={`https://www.themealdb.com/images/ingredients/${index.strIngredient11}.png`} alt="" />
                            <p className='fFize'>{index.strMeasure11}</p>
                          </div>
                          <div>
                            <img onClick={()=>{IngridientClick(index.strIngredient12)
                            setIdInfo(false);
                            setMenuPhoto(false);
                            setOpen(true)
                            setIdMeals(false);
                            }} width={200} src={`https://www.themealdb.com/images/ingredients/${index.strIngredient12}.png`} alt="" />
                            <p className='fFize'>{index.strMeasure12}</p>
                          </div>
                          </div>
                          
                        )
                      })
                      }
                    </div>
                  </div>
                ))
              )}
              { open && (
                          meals.map( index =>(
                              <div>
                                <div key={index.idMeal} className=''>
                                <img className='BackGround' onClick={()=>{handleIngredientClick(index.idMeal);
                                setIdInfo(true);
                                setMenuPhoto(false);
                                setIdMeals(false);}} width={250} src={index.strMealThumb} alt={index.strMealThumb} />
                                <p className='spanMp'>{index.strMeal}</p>
                                </div>
                              </div>
                          ))
                       )
                      }
            </div>
          </div>
          </div>
        <div className="headerContainer">
        <div className="borderBottom bottom"></div>
        </div>
      </section>
    </>
  );
};

export default Categories;