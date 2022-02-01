import { createContext, useContext, useMemo } from 'react';
import { useInput } from '../../hooks/useInput';

const FormContext = createContext();
export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [nameProps, resetName] = useInput('');
  const [ageProps, resetAge] = useInput();
  const [locationProps, resetLocation] = useInput('');
  const contextValue = useMemo(() => ({
    nameProps,
    resetName,
    ageProps,
    resetAge,
    locationProps,
    resetLocation
  }),[nameProps, resetName, ageProps, resetAge, locationProps, resetLocation])
  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  );
};
