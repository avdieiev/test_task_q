import React from 'react';
import { Select } from 'components/Select';
import { DURATION_OPTIONS } from './constants';
import { ProjectProps } from './types';


export const SingleProject: React.FC<ProjectProps> = (props) => {

  const { title, description, duration, onProjectChange, id } = props;

  const receivedProject = { title, description, duration }

  return (
    <div className="single-project">
      <div className="project-name">
        Project
        <Select
          name="proect-name"
          options={[ { label: title, value: title } ]}
          onChange={({ value }) => onProjectChange({ ...receivedProject, title: value, id })}
        />
      </div>
      <div className="project-details">
        Details
        <textarea
          onChange={e => onProjectChange({
            ...receivedProject,
            description: e.target.value,
            id
          })}
          value={description}
        />
      </div>
      <div className="project-duration">
        Duration
        <input
          type="number"
          value={duration.value}
          onChange={e => onProjectChange({
            ...receivedProject,
            duration: { value: e.target.value, units: duration.units },
            id
          })}
        />
        <Select
          name="duration-type"
          options={DURATION_OPTIONS}
          selected={duration.units}
          onChange={({ value }) => onProjectChange({
            ...receivedProject,
            duration: { units: value, value: duration.value },
            id
          })}
        />
      </div>
    </div>
  )
}