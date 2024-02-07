import React, { useContext, useEffect } from 'react';
import ItemCard, { Item } from 'components/ItemCard';
import './styles.css';
import WorkoutForm from 'components/WorkoutForm/WorkoutForm';
import { SET_WORKOUTS, WorkoutsContext } from 'context/WorkoutsContext';

const Home = (): JSX.Element => {
  const { workouts, dispatch } = useContext(WorkoutsContext);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('/api/workouts');

      // If response was returned correctly
      if (response.ok) {
        const itemsJson: Item[] = await response.json();
        dispatch({ type: SET_WORKOUTS, payload: itemsJson });
      }
    };

    fetchItems();
  }, [dispatch]);

  return (
    <div className="home">
      <ul className="items">
        {workouts.map((item) => (
          <ItemCard key={item._id} {...item} />
        ))}
      </ul>
      <WorkoutForm />
    </div>
  );
};

export default Home;
