import { useState, useEffect } from 'react';
import FareDetails from './FareDetails';
import { useDispatch, useSelector } from 'react-redux';
import { setMeals, setSelectedTab, meals } from '@/redux/flightSlice';

const Meals = () => {
  const dispatch = useDispatch();
  const [mealsData, setMealsData] = useState([]);
  const [filterType, setFilterType] = useState('All');
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mealsValue = useSelector(meals)
  console.log('mealsValue', mealsValue);
  

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          'https://jsonblob.com/api/jsonBlob/1287654071610499072'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch meals');
        }
        const data = await response.json();
        setMealsData(data?.Response[0].UpsellMeals); // Use the correct field for meals data
        setLoading(false);
      } catch (error) {
        setError(error.message || 'Unknown error occurred');
        setLoading(false);
      }
    };

    fetchMeals();

  }, []);
  console.log('meals data', JSON.stringify(mealsData));


  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  const handleAddClick = (mealIndex, meal) => {
    console.log('meals == > ', mealsData);
    if (selectedMeal !== null && selectedMeal !== mealIndex) {
      alert('You can select only one product at a time.');
      return;
    }

    if (selectedMeal === mealIndex) {
      console.log('IF');
      setSelectedMeal(null);
      setQuantity(1);
      dispatch(setMeals({ meal: null })); // Clear the selection
    } else {
      console.log('else');
      setSelectedMeal(mealIndex);
      setQuantity(1);
      dispatch(setMeals({ meal: meal })); // Set the selected meal amount
      setTimeout(() => {
        dispatch(setSelectedTab("bag"));
      }, 1000);
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

  const filteredMeals =  mealsData?.length>0 ? mealsData?.filter((meal) => {
    if (filterType === 'All') return true;
    // Adjust filter conditions based on actual data
    return meal.Description.toLowerCase().includes(filterType.toLowerCase());
  }) : [];

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
        {/* <div className="flex space-x-3 mb-4">
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
        </div> */}

        <div className='grid grid-cols-4 gap-4'>
          {/* Meals List */}
          {filteredMeals.map((meal, index) => (
            <div key={index} className="flex flex-col justify-between mb-4 border border-gray-500">
              <div className="flex items-center space-x-3">
                <div className="text-xl">
                  <div className='w-full'>
                    <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt="" />
                  </div>
                  <div className='p-2 text-sm font-medium'>{meal.Name}</div>
                  {/* <div>{meal.Amount?.NewAmount} GBP</div> */}
                </div>
              </div>
              <div className="flex items-center justify-center text-sm p-2">
                {selectedMeal !== index  ? (
                  <button
                    onClick={() => handleAddClick(index, meal)}
                    className="py-2 px-10 text-center border rounded-lg text-white bg-green-700"
                  >
                    ADD
                  </button>
                ) : (
                  <div className="flex items-center border border-gray-400">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="py-2 px-4 text-white bg-green-700"
                    >
                      -
                    </button>
                    <span className="py-2 px-4">{quantity}</span>
                    <button
                      // onClick={() => handleQuantityChange(1)}
                      className="py-2 px-4 text-white bg-green-700"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
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
