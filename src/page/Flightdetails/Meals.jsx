import { useState } from 'react';
import Veg from '../../assets/images/veg.jpg';
import Nonveg from '../../assets/images/nonveg.jpg';
import FareDetails from './FareDetails';
import { useDispatch } from 'react-redux';
import { setMeals } from '@/redux/flightSlice';

const Meals = ({}) => {
  const dispatch = useDispatch();
  //   const [filterType, setFilterType] =
  //     (useState < 'All') | 'Veg' | ('Non Veg' > 'All');
  //   const [selectedMeal, setSelectedMeal] = (useState < number) | (null > null);
  //   const [quantity, setQuantity] = useState < number > 1;

  const [filterType, setFilterType] = useState('All');
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const meals = [
    {
      id: 1,
      name: 'Paneer Tikka Sandwich + beverage',
      type: 'Veg',
      price: '£ 400',
      image: Veg,
    },
    {
      id: 2,
      name: 'Chicken Junglee Sandwich + beverage',
      type: 'Non Veg',
      price: '£ 400',
      image: Nonveg,
    },
    {
      id: 3,
      name: 'Chicken  + beverage',
      type: 'Non Veg',
      price: '£ 600',
      image: Nonveg,
    },
    {
      id: 4,
      name: 'Sandwich + beverage',
      type: 'Non Veg',
      price: '£ 700',
      image: Nonveg,
    },
  ];

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  const handleAddClick = (mealId, mealPrice) => {
    if (selectedMeal && selectedMeal !== mealId) {
      alert('You can select only one product at a time.');
      return;
    }
    if (selectedMeal === mealId) {
      // Deselect meal if it's already selected
      setSelectedMeal(null);
      setQuantity(1);
      dispatch(setMeals({ meal: '' })); // Clear the selection
    } else {
      setSelectedMeal(mealId);
      setQuantity(1);
      dispatch(setMeals({ meal: mealPrice }));
    }
  };

  const handleQuantityChange = (change) => {
    if (selectedMeal === null) return; // Only allow quantity change if a meal is selected

    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + change;
      if (newQuantity <= 0) {
        // Reset the meal selection if quantity is 0 or less
        setSelectedMeal(null);
        dispatch(setMeals({ meal: '' })); // Clear the selection
        return 1; // Reset quantity to 1
      }
      return newQuantity;
    });
  };

  const filteredMeals = meals.filter(
    (meal) => filterType === 'All' || meal.type === filterType
  );

  return (
    <>
      <div className="flex">
        <div className="space-y-3 w-full">
          {/* Filter */}
          <div className="flex space-x-3  mb-4">
            <label>
              <input
                type="radio"
                name="filter"
                checked={filterType === 'All'}
                onChange={() => handleFilterChange('All')}
              />
              All
            </label>
            <label>
              <input
                type="radio"
                name="filter"
                checked={filterType === 'Veg'}
                onChange={() => handleFilterChange('Veg')}
              />
              Veg
            </label>
            <label>
              <input
                type="radio"
                name="filter"
                checked={filterType === 'Non Veg'}
                onChange={() => handleFilterChange('Non Veg')}
              />
              Non Veg
            </label>
          </div>

          {/* Meals List */}
          {filteredMeals.map((meal) => (
            <div key={meal.id} className="flex justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img src={meal.image} alt={meal.name} />
                <div className="text-xl">
                  <div>{meal.name}</div>
                  <div>{meal.price}</div>
                </div>
              </div>

              <div className="flex items-center text-xl">
                {selectedMeal !== meal.id ? (
                  <button
                    onClick={() => handleAddClick(meal.id, meal.price)}
                    className="py-2 px-10 text-center border rounded-lg text-white bg-green-400 border-green-400"
                  >
                    ADD
                  </button>
                ) : (
                  <div className="flex items-center border border-gray-400">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="py-2 px-4  text-white bg-green-400 border-green-400"
                    >
                      -
                    </button>
                    <span className="py-2 px-4">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="py-2 px-4  text-white bg-green-400 border-green-400"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="w-1/4">
          <FareDetails
            classname={
              'bg-white ml-10 right-100 inline-block p-4 border rounded w-80'
            }
          />
        </div>
      </div>
    </>
  );
};

export default Meals;
