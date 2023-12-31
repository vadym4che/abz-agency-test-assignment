import React, { useState } from 'react';
import classNames from 'classnames';
import './Input.css';
import Tooltip from '../../Utility/Tooltip/Tooltip';

const Input = ({
  name,
  title,
  placeholder,
  showError,
  errorMessage,
  onChange,
  onBlur,
  hintMessage,
  value,
}) => {
  const [filled, setFilled] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleInput = (e) => {
    onChange(e);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleFieldBlur = () => {
    setFocused(false);
    setFilled(value !== '');
    onBlur();
  };

  return (
    <div className={classNames('input-container')}>
      <div className={classNames('title', { 'title-focused': focused })}>
        {title}
      </div>

      <label className={classNames('input-label', { 'error-field': (showError && !focused) })}>
        <input
          name={name}
          className={classNames('input text-body', { filled })}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={handleInput}
          onFocus={handleFocus}
          onBlur={handleFieldBlur}
          // title={hintMessage}
        />
      </label>

      {showError && !focused && <p className="error">{errorMessage}</p>}
      {focused && <p className="hint">{hintMessage}</p>}
      {!showError && !focused && <p className="hint">&nbsp;</p>}
    </div>
  );
};

export default React.memo(Input);