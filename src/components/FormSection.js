import React from 'react';
import { useFormContext } from './../context/FormContext';
import styles from './FormSection.module.css';

const FormSection = ({ onSubmit }) => {
  const { nameProps, ageProps, locationProps } = useFormContext();
  return (
    <section className={styles['form-section']}>
      <form
        className={styles['form-container']}
        onSubmit={e => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input {...nameProps} type='text' placeholder='Name'  className={styles["input-field"]} required />
        <input {...ageProps} type='number' placeholder='Age' className={styles["input-field"]} min="5" max="200" required />
        <input {...locationProps} type='test' className={styles["input-field"]} placeholder='Location' required />
        <button className={styles["submit-button"]} type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default FormSection;
