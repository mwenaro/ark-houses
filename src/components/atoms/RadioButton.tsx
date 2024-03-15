import React from 'react';

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked,
  onChange,
}) => (
  <div className="mb-4">
    <input
      type="radio"
      id={`${name}-${value}`}
      name={name}
      value={value}
      checked={checked}
      onChange={() => onChange(value)}
      className="mr-2"
    />
    {label}
  </div>
);

export default RadioButton;
