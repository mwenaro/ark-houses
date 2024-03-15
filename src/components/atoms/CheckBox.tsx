import React from 'react';

interface CheckBoxProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  name,
  checked,
  onChange,
}) => (
  <div className="mb-4">
    <label htmlFor={name} className="text-gray-700 flex items-center">
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={() => onChange(!checked)}
        className="mr-2"
      />
      {label}
    </label>
  </div>
);

export default CheckBox;
