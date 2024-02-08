import { DELETE_WORKOUT, WorkoutsContext } from 'context/WorkoutsContext';
import './styles.css';
import { useContext } from 'react';

export interface Item {
  _id: string;
  title: string;
  reps: number;
  load: number;
  createdAt: string;
}

const ItemCard = (item: Item): JSX.Element => {
  const { dispatch } = useContext(WorkoutsContext);

  const handleDelete = async () => {
    console.log('Delete stuff');

    const response = await fetch(`/api/workouts/${item._id}`, {
      method: 'DELETE',
    });

    const json = await response.json();

    if (response.ok) {
      // Update state
      dispatch({ type: DELETE_WORKOUT, payload: json._id });
    }
  };
  return (
    <div className="item-details">
      <h4>{item.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {item.load}
      </p>
      <p>
        <strong>Number of reps: </strong>
        {item.reps}
      </p>
      <p>{item.createdAt}</p>
      <span className="delete" onClick={handleDelete}>
        Delete
      </span>
    </div>
  );
};

export default ItemCard;
