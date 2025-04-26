import React from 'react';
import { IncidentProvider } from './context/IncidentContext';
import FilterSortControls from './components/FilterSortControls';
import IncidentList from './components/IncidentList';
import ReportIncidentForm from './components/ReportIncidentForm';
import './App.css';

const App = () => {
  return (
    <IncidentProvider>
      <div className="app">
        <h1 className='main-heading'>AI Safety Incident Dashboard</h1>
        <ReportIncidentForm />
        <FilterSortControls />
        <IncidentList />
      </div>
    </IncidentProvider>
  );
};

export default App;
