import { createContext, useContext, useMemo } from 'react';
import { useInput } from './../hooks/useInput';
import { constants } from './../constants';

const FormContext = createContext();
export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [nameProps, resetName] = useInput(constants.EMPTY_STRING);
  const [ageProps, resetAge] = useInput(constants.EMPTY_STRING);
  const [locationProps, resetLocation] = useInput(constants.EMPTY_STRING);
  const contextValue = useMemo(
    () => ({
      nameProps,
      resetName,
      ageProps,
      resetAge,
      locationProps,
      resetLocation
    }),
    [nameProps, resetName, ageProps, resetAge, locationProps, resetLocation]
  );
  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};
