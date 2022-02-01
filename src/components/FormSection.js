import React from 'react';
import { useFormContext } from './context/FormContext';

const FormSection = ({ onSubmit }) => {
  const { nameProps, ageProps, locationProps } = useFormContext();
  return (
    <section>
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input {...nameProps} type='text' placeholder='Name' required />
        <input {...ageProps} type='number' placeholder='Age' min="5" max="200" required />
        <input {...locationProps} type='test' placeholder='Location' required />
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default FormSection;
