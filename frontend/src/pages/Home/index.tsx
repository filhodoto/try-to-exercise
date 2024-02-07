import React, { useEffect, useState } from 'react';
import ItemCard, { Item } from 'components/ItemCard';
import './styles.css';
import WorkoutForm from 'components/WorkoutForm/WorkoutForm';

const Home = (): JSX.Element => {
  const [items, setSetItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('/api/workouts');

      // If response was returned correctly
      if (response.ok) {
        const itemsJson: Item[] = await response.json();
        setSetItems(itemsJson);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="home">
      <ul className="items">
        {items.map((item) => (
          <ItemCard key={item._id} {...item} />
        ))}
      </ul>
      <WorkoutForm />
    </div>
  );
};

export default Home;
