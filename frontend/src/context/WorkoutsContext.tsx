import { Item } from 'components/ItemCard';
import { createContext, useReducer } from 'react';

// TODO:: Clean this file and separate concepts in different files

// Set action types
export const CREATE_WORKOUT = 'CREATE_WORKOUT';
export const SET_WORKOUTS = 'SET_WORKOUTS';
export const DELETE_WORKOUT = 'DELETE_WORKOUT';

// Set type of actions that can be used, define payload depending on type of action
type WorkoutsReducerActionTypes =
  | { type: typeof CREATE_WORKOUT; payload: Item }
  | { type: typeof SET_WORKOUTS; payload: Item[] }
  | { type: typeof DELETE_WORKOUT; payload: string };

interface WorkoutsContextProps {
  workouts: Item[];
  dispatch: (action: WorkoutsReducerActionTypes) => void;
}

// Set initial state
const initialState: WorkoutsContextProps = {
  workouts: [],
  dispatch: () => {}, // Placeholder initial dispatch
};

// Create reducer
const workoutsReducer = (
  state: WorkoutsContextProps,
  { type, payload }: WorkoutsReducerActionTypes
) => {
  switch (type) {
    case SET_WORKOUTS:
      return { ...state, workouts: payload };

    case CREATE_WORKOUT:
      return { ...state, workouts: [payload, ...state.workouts] };

    case DELETE_WORKOUT: {
      // Filter current workouts state and create new array with all workouts except the one with passed _id in payload
      const updatedWorkouts = state.workouts.filter(
        (item) => item._id !== payload
      );
      return {
        ...state,
        workouts: updatedWorkouts,
      };
    }

    default:
      return state;
  }
};

// Type context with empty value explaining typescript that this context is empty for the moment
export const WorkoutsContext =
  createContext<WorkoutsContextProps>(initialState);

export const WorkoutsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(workoutsReducer, initialState);

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
