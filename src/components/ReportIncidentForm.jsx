import React, { useContext, useState } from 'react';
import { IncidentContext } from '../context/IncidentContext';
import '../Styles/ReportIncidentForm.css';

const ReportIncidentForm = () => {
  const { addIncident } = useContext(IncidentContext);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    severity: 'Low',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;

    const newIncident = {
      id: Date.now(),
      ...formData,
      reported_at: new Date().toISOString(),
    };
    addIncident(newIncident);
    setFormData({ title: '', description: '', severity: 'Low' });
  };

  return (
    <div className='main-form-container'>
      <form onSubmit={handleSubmit} className="report-incident-form">
        <h2 className='form-title'>Report Incident</h2>
        <div className="input-container">
          <label>Title</label>
          <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              className='form-title-input'
            />
        </div>
        <div className="input-container">
          <label>
            Description
          </label>
          <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
        </div>
        <div className="input-container">
          <label>Severity</label>
          <select
              value={formData.severity}
              onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
        </div>
        <button type="submit" className='form-button'>Report Incident</button>
      </form>
    </div>
  );
};

export default ReportIncidentForm;
