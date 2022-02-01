import React from 'react';
import { useFormContext } from './../context/FormContext';
import { constants } from '../constants';

const InformationSection = ({ isSubmitted, weatherFetch }) => {
  const { nameProps, ageProps, locationProps } = useFormContext();

  let getString = () => {
    if (weatherFetch.loading) return constants.LOADING;
    if (weatherFetch.error) return `${constants.ERROR} ${weatherFetch.error}`;
    if (weatherFetch.value)
      return (
        <p className='centered'>
          You are <strong>{nameProps.value}</strong> (
          <strong>{ageProps.value}</strong> years old) and are living at{' '}
          <strong>{locationProps.value}</strong>. According your age, you should
          have slept for a total of{' '}
          <strong>{ageProps.value * 365 * constants.PER_DAY_SLEEP}</strong>{' '}
          hour(s). The weather at your location is{' '}
          <strong>{weatherFetch.value?.data}</strong> Celsius.
        </p>
      );
  };
  return <section>{isSubmitted && getString()}</section>;
};

export default InformationSection;
