import React, { useEffect, useState } from 'react';

interface Item {
  _id: string;
  title: string;
  reps: number;
  load: number;
}

const Home = (): JSX.Element => {
  const [items, setSetItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('/api/workouts');
      console.log('response >>> ', response);
      // If response was returned correctly
      if (response.ok) {
        const itemsJson = await response.json();
        console.log('itemsJson >>> ', itemsJson);
        setSetItems(itemsJson);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="home">
      <ul className="items">
        {items &&
          items.map((item) => (
            <li key={item._id} className="item">
              {item.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
