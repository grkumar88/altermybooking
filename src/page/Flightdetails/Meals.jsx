import { useState, useEffect } from 'react';
import FareDetails from './FareDetails';
import { useDispatch } from 'react-redux';
import { setMeals } from '@/redux/flightSlice';

const Meals = () => {
  const dispatch = useDispatch();
  const [meals, setMealsData] = useState([]);
  const [filterType, setFilterType] = useState('All');
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          'https://d25ac222-420a-4dd3-9688-bfba567d7a16.mock.pstmn.io/api/ancillary/MealsBaggages'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch meals');
        }
        const data = await response.json();
        setMealsData(data.UpsellMeals); // Use the correct field for meals data
        setLoading(false);
      } catch (error) {
        setError(error.message || 'Unknown error occurred');
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  const handleAddClick = (mealIndex, meal) => {
    if (selectedMeal !== null && selectedMeal !== mealIndex) {
      alert('You can select only one product at a time.');
      return;
    }

    if (selectedMeal === mealIndex) {
      setSelectedMeal(null);
      setQuantity(1);
      dispatch(setMeals({ meal: null })); // Clear the selection
    } else {
      setSelectedMeal(mealIndex);
      setQuantity(1);
      dispatch(setMeals({ meal: meal.Amount.NewAmount })); // Set the selected meal amount
    }
  };

  const handleQuantityChange = (change) => {
    if (selectedMeal === null) return;

    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + change;
      if (newQuantity <= 0) {
        setSelectedMeal(null);
        dispatch(setMeals({ meal: null }));
        return 1;
      }
      return newQuantity;
    });
  };

  const filteredMeals = meals.filter((meal) => {
    if (filterType === 'All') return true;
    // Adjust filter conditions based on actual data
    return meal.Description.toLowerCase().includes(filterType.toLowerCase());
  });

  if (loading) {
    return <div>Loading meals...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex">
      <div className="space-y-3 w-full">
        {/* Filter */}
        <div className="flex space-x-3 mb-4">
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
              checked={filterType === 'Vegetarian'}
              onChange={() => handleFilterChange('Vegetarian')}
            />
            Vegetarian
          </label>
          <label>
            <input
              type="radio"
              name="filter"
              checked={filterType === 'Non Vegetarian'}
              onChange={() => handleFilterChange('Non Vegetarian')}
            />
            Non Vegetarian
          </label>
        </div>

        {/* Meals List */}
        {
        filteredMeals.map((meal, index) => (
          <div key={index} className="flex justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="text-xl">
                <div>{meal.Name}</div>
                <div>{meal.Amount.NewAmount} GBP</div>
              </div>
            </div>

            <div className="flex items-center text-xl">
              {selectedMeal !== index ? (
                <button
                  onClick={() => handleAddClick(index, meal)}
                  className="py-2 px-10 text-center border rounded-lg text-white bg-green-400 border-green-400"
                >
                  ADD
                </button>
              ) : (
                <div className="flex items-center border border-gray-400">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="py-2 px-4 text-white bg-green-400 border-green-400"
                  >
                    -
                  </button>
                  <span className="py-2 px-4">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="py-2 px-4 text-white bg-green-400 border-green-400"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="w-1/4">
        <FareDetails
          classname="bg-white ml-10 right-100 inline-block p-4 border rounded w-80"
        />
      </div>
    </div>
  )
};

export default Meals;
