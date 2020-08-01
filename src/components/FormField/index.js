import React from 'react';
import PropTypes from 'prop-types';

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;
  let input = (
    <input
      id={fieldId}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
  if (type === 'textarea') {
    input = (
      <textarea
        id={fieldId}
        name={name}
        value={value}
        onChange={onChange}
      />
    );
  }
  return (
    <div>
      <label
        htmlFor={fieldId}
      >
        {label}
        :
        {input}
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
