import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { useFormContext } from './context/FormContext';
import FormSection from './components/FormSection';
import InformationSection from './components/InformationSection';
import { useAsync } from './hooks/useAsync';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { nameProps, ageProps, locationProps } = useFormContext();

  useEffect(() => {
    setIsSubmitted(false);
  }, [nameProps.value, ageProps.value, locationProps.value])
  const weatherFetch = useAsync(url =>
    fetch(url).then(response => response.json())
  );
  const handleSubmit = () => {
    weatherFetch.run('/weather')
    setIsSubmitted(true);
  }
  return (
    <main className={styles['app-container']}>
      <h2 className='centered'>Enter your details</h2>
      <FormSection onSubmit={handleSubmit} />
      {<InformationSection isSubmitted={isSubmitted} weatherFetch={weatherFetch}/>}
    </main>
  );
}

export default App;
