import React, { useState } from 'react';
import './styles.css';

const WorkoutForm = (): JSX.Element => {
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);

  // TODO:: This is very verbose, there should be a better way of doing this
  const resetState = () => {
    setTitle('');
    setLoad('');
    setReps('');
    setReps('');
    setError(null);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    // Prevent form from reloading page on submit
    e.preventDefault();

    // Create object with new workout  values
    const workout = { title, load, reps };

    // Make request to server
    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout), // this needs to be json to be proper read by server
      headers: { 'Content-type': 'application/json' },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      // Reset all state
      resetState();

      // Give a positive feedback
      alert('Workout created successfully');

      console.log(json);
    }
  };

  return (
    <form action="" className="workouts" onSubmit={handleSubmit}>
      <h2>Create a new workout</h2>
      <label aria-label="add title">Add title:</label>
      <input
        type="text"
        required
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label aria-label="add load">Add load (in kg):</label>
      <input
        type="number"
        required
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />
      <label aria-label="add reps">Add reps:</label>
      <input
        type="number"
        required
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      <button>Add workout</button>
      {error && <div className="error">Something went wrong: {error}</div>}
    </form>
  );
};
export default WorkoutForm;
