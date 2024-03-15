import React from 'react';

interface InputFieldProps {
  name: string;
  type: string;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  type,
  placeholder,
  ...rest
}) => (
  <div className="mb-4">
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      className="border rounded p-2"
      {...rest}
    />
    {/* Add error message component here */}
  </div>
);

export default InputField;
