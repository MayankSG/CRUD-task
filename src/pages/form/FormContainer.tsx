import React from 'react';

import Form from './Form';
import { FormProps } from './Form.types';
import styles from './Form.module.css';

const FormContainer = ({ type }: FormProps) => {
  return (
    <div className={styles.form}>
      <Form type={type} />
    </div>
  );
};

export default FormContainer;
