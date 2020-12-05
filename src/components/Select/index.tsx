import React from 'react';
import { SelectProps } from './types';


export const Select: React.FC<SelectProps> = (props) => {

  const { options, onChange, name, selected } = props;

  return (
    <select
      className="select"
      name={name}
      value={selected}
      onChange={(e) => onChange({ value: e.target.value, label: e.target.value })}
    >
      {options.map(({ label, value }) => (
        <option
          key={value}
          value={value}
        >
          {label}
        </option>
      ))}
    </select>
  )
}