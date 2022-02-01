import './App.css';
import FormSection from './components/FormSection';
import InformationSection from './components/InformationSection';

function App() {
  return (
    <div className='App'>
      <FormSection onSubmit={() => {}}/>
      <InformationSection />
    </div>
  );
}

export default App;
