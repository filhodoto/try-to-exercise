import './styles.css';

export interface Item {
  _id: string;
  title: string;
  reps: number;
  load: number;
  createdAt: string;
}

const ItemCard = (item: Item): JSX.Element => {
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
    </div>
  );
};

export default ItemCard;
