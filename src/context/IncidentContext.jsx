import React, { createContext, useState } from 'react';

export const IncidentContext = createContext();

export const IncidentProvider = ({ children }) => {
  const [incidents, setIncidents] = useState([
    {
      id: 1,
      title: 'Biased Recommendation Algorithm',
      description: 'Algorithm consistently favored certain demographics...',
      severity: 'Medium',
      reported_at: '2025-03-15T10:00:00Z',
    },
    {
      id: 2,
      title: 'LLM Hallucination in Critical Info',
      description: 'LLM provided incorrect safety procedure information...',
      severity: 'High',
      reported_at: '2025-04-01T14:30:00Z',
    },
    {
      id: 3,
      title: 'Minor Data Leak via Chatbot',
      description: 'Chatbot inadvertently exposed non-sensitive user metadata...',
      severity: 'Low',
      reported_at: '2025-03-20T09:15:00Z',
    },
  ]);

  const [filters, setFilters] = useState({ severity: 'All', sortOrder: 'Newest First' });

  const addIncident = (incident) => {
    setIncidents((prevIncidents) => [...prevIncidents, incident]);
  };

  const filterAndSortIncidents = () => {
    let filteredIncidents = [...incidents];

    if (filters.severity !== 'All') {
      filteredIncidents = filteredIncidents.filter(
        (incident) => incident.severity === filters.severity
      );
    }

    filteredIncidents.sort((a, b) => {
      if (filters.sortOrder === 'Newest First') {
        return new Date(b.reported_at) - new Date(a.reported_at);
      }
      return new Date(a.reported_at) - new Date(b.reported_at);
    });

    return filteredIncidents;
  };

  return (
    <IncidentContext.Provider
      value={{
        incidents: filterAndSortIncidents(),
        filters,
        setFilters,
        addIncident,
      }}
    >
      {children}
    </IncidentContext.Provider>
  );
};
