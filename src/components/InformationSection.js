import React from 'react';
import { useFormContext } from './../context/FormContext';
import { constants } from '../constants';

const InformationSection = ({ isSubmitted, weatherFetch }) => {
  const { nameProps, ageProps, locationProps } = useFormContext();

  let getString = () => {
    if (weatherFetch.loading) return constants.LOADING;
    if (weatherFetch.error) return `${constants.ERROR} ${weatherFetch.error}`;
    if (weatherFetch.value)
      return `You are ${nameProps.value} (${
        ageProps.value
      } years old) and are living at ${
        locationProps.value
      }. According your age, you should have slept for a total of ${
        ageProps.value * 365 * constants.PER_DAY_SLEEP
      } hour(s). The weather at your location is ${
        weatherFetch.value?.data
      } Celsius.`;
  };
  return <section>{isSubmitted && getString()}</section>;
};

export default InformationSection;
