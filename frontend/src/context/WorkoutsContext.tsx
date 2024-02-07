import { createContext } from 'react';

interface WorkoutsContextProps {}

// Type context with empty value explaining typescript that this context is empty for the moment
const WorkoutsContext = createContext<WorkoutsContextProps>({});

export const WorkoutsContextProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: WorkoutsContextProps;
}) => {
  return (
    <WorkoutsContext.Provider value={value}>
      {children}
    </WorkoutsContext.Provider>
  );
};
