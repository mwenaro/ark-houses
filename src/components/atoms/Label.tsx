import React from 'react';

interface LabelProps {
  htmlFor: string;
  text: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, text }) => (
  <label htmlFor={htmlFor} className="text-gray-700">
    {text}
  </label>
);

export default Label;
