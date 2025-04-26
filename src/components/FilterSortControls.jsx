import React, { useContext } from 'react';
import { IncidentContext } from '../context/IncidentContext';
import '../Styles/FilterSortControls.css';

const FilterSortControls = () => {
  const { filters, setFilters } = useContext(IncidentContext);

  const handleSeverityChange = (e) => {
    setFilters((prev) => ({ ...prev, severity: e.target.value }));
  };

  const handleSortOrderChange = (e) => {
    setFilters((prev) => ({ ...prev, sortOrder: e.target.value }));
  };

  return (
    <div className="filter-sort-controls">
      <div className="control">
        <label htmlFor="severity" className='control-label'>Filter by Severity</label>
        <select id="severity" value={filters.severity} onChange={handleSeverityChange}>
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="control">
        <label htmlFor="sortOrder">Sort by Date</label>
        <select id="sortOrder" value={filters.sortOrder} onChange={handleSortOrderChange}>
          <option value="Newest First">Newest First</option>
          <option value="Oldest First">Oldest First</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSortControls;
