import React from 'react';
import './style.css';

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  placeHolder?: string;
}

const Index: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  required,
  placeHolder,
}) => {
  return (
    <div className="input-field">
      <label className="input-field__label">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="input-field__input"
        placeholder={placeHolder}
      />
    </div>
  );
};

export default Index;
