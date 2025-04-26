import React, { useContext, useState } from 'react';
import { IncidentContext } from '../context/IncidentContext';
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import '../Styles/IncidentList.css';

const IncidentItem = ({ incident }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="incident-item">
      <div className="incident-header">
        <div className='incident-ts'>
          <h3 className='incident-title'>{incident.title}</h3>
          <div>
          <p className={`severity severity-${incident.severity.toLowerCase()}`}>{incident.severity}</p>
          </div>
        </div>
        <div onClick={() => setExpanded(!expanded)} className='arrow'>
          {expanded ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </div>
      <p className='incident-date'>{new Date(incident.reported_at).toLocaleDateString()}</p>
      {expanded && <p className="incident-description">{incident.description}</p>}
    </div>
  );
};

const IncidentList = () => {
  const { incidents } = useContext(IncidentContext);

  return (
    <div className="incident-list">
      {incidents.map((incident) => (
        <IncidentItem key={incident.id} incident={incident} />
      ))}
    </div>
  );
};

export default IncidentList;
