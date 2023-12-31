import React, { useState } from 'react';
import classNames from 'classnames';
import './Upload.css';
import { isValidPhoto } from '../../../utils/validate';

const Upload = ({ photo, setPhoto, inputErrors, setInputErrors }) => {
  const [fileName, setFileName] = useState('Upload your photo');
  const [filled, setFilled] = useState(false);
  const [error, setError] = useState(inputErrors.photo);

  const handleUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (setPhoto) {
        setPhoto(file);
        setFileName(file.name);
        setFilled(true);
        setError(false); // Reset the error state on successful upload

        setInputErrors((prevErrors) => {
          const errors = { ...prevErrors };

          if (isValidPhoto(file) !== true) {
            errors.photo = isValidPhoto(file);
          } else {
            delete errors.photo;
          }

          return errors;
        });
      } else {
        setFileName('Upload your photo');
        setFilled(false);
        setError(true);
      }
    } else {
      // If file is not selected, reset the state and show error
      setFileName('Upload your photo');
      setFilled(false);
      setError(true);

      setInputErrors((prevErrors) => ({
        ...prevErrors,
        photo: 'Photo is required',
      }));
    }
  };

  return (
    <div className={classNames('upload-container input-field')}>
      <label htmlFor='photo' className={classNames('upload-label', {
        'error-field': error,
      })}>
        <div className={classNames('label', { filled: filled && !error, 'error-field': error })}>
          Upload
        </div>
        <input
          type="file"
          name='photo'
          id='photo'
          onChange={handleUpload}
          aria-label="photo upload"
          style={{ display: 'none' }}
        />
        <div className={classNames('placeholder text-body', { filled, 'error-field': error })}>
          {fileName}
        </div>
      </label>
      {inputErrors.photo && <p className="error">{inputErrors.photo}</p>}
    </div>
  );
};

export default React.memo(Upload);
